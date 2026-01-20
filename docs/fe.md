
----


# 개발 순서

 ---
  🚀 lambda-faucet-dapp 프로젝트 셋업

  1단계: 프로젝트 생성 및 이동

  cd ~/Desktop
  mkdir lambda-faucet-dapp
  cd lambda-faucet-dapp

  ---
  2단계: Next.js 프로젝트 초기화

  npx create-next-app@latest . --typescript --tailwind --app --no-src --import-alias "@/*"

  프롬프트 나오면 이렇게 선택:
  ✔ Would you like to use ESLint? … Yes
  ✔ Would you like to use Turbopack? … No
  ✔ Would you like to use App Router? … Yes

  ---
  3단계: Web3 라이브러리 설치

  npm install wagmi viem @tanstack/react-query

  ---
  4단계: RainbowKit 설치 (지갑 연결)

  npm install @rainbow-me/rainbowkit

  ---
  5단계: UI 라이브러리 설치

  npm install lucide-react
  npx shadcn@latest init

  shadcn 프롬프트:
  ✔ Would you like to use TypeScript? … yes
  ✔ Which style would you like to use? › New York
  ✔ Which color would you like to use as base color? › Slate
  ✔ Where is your global CSS file? … app/globals.css
  ✔ Would you like to use CSS variables for colors? … yes
  ✔ Are you using a custom tailwind prefix? … no
  ✔ Where is your tailwind.config.js located? … tailwind.config.ts
  ✔ Configure the import alias for components: … @/components
  ✔ Configure the import alias for utils: … @/lib/utils
  ✔ Are you using React Server Components? … yes

  ---
  6단계: shadcn 컴포넌트 설치

  npx shadcn@latest add button
  npx shadcn@latest add card
  npx shadcn@latest add input
  npx shadcn@latest add badge
  npx shadcn@latest add separator
  npx shadcn@latest add toast
  npx shadcn@latest add skeleton

  ---
  7단계: 차트 라이브러리 설치

  npm install recharts

  ---
  8단계: Git 초기화

  git init
  git add .
  git commit -m "Initial commit: Next.js setup with Web3 stack"

  ---
  9단계: 폴더 구조 생성

  mkdir -p lib/contracts
  mkdir -p components/faucet
  mkdir -p hooks
  mkdir -p config

  ---
  10단계: 기본 설정 파일 생성

  config/constants.ts

  cat > config/constants.ts << 'EOF'
  // 나중에 배포 후 주소 업데이트
  export const CONTRACTS = {
    token: "0x0000000000000000000000000000000000000000",
    faucet: "0x0000000000000000000000000000000000000000",
    admin: "0x0000000000000000000000000000000000000000",
    referral: "0x0000000000000000000000000000000000000000",
    stats: "0x0000000000000000000000000000000000000000",
  } as const;

  export const CHAIN_ID = 31337; // Hardhat localhost
  // export const CHAIN_ID = 11155111; // Sepolia

  export const FAUCET_PARAMS = {
    baseAmount: 100,
    cooldown: 3600, // 1 hour in seconds
  } as const;
  EOF

  ---
  11단계: wagmi 설정 파일 생성

  lib/wagmi.ts

  cat > lib/wagmi.ts << 'EOF'
  import { getDefaultConfig } from "@rainbow-me/rainbowkit";
  import { hardhat, sepolia } from "wagmi/chains";

  export const config = getDefaultConfig({
    appName: "Lambda Faucet",
    projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // https://cloud.walletconnect.com 에서 받기
    chains: [hardhat, sepolia],
    ssr: true,
  });
  EOF

  ---
  12단계: 개발 서버 실행 테스트

  npm run dev

  브라우저에서 http://localhost:3000 열어서 확인

  ---
  13단계: .env.local 파일 생성

  cat > .env.local << 'EOF'
  # WalletConnect Project ID (https://cloud.walletconnect.com 에서 발급)
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

  # Contract Addresses (배포 후 업데이트)
  NEXT_PUBLIC_TOKEN_ADDRESS=0x0000000000000000000000000000000000000000
  NEXT_PUBLIC_FAUCET_ADDRESS=0x0000000000000000000000000000000000000000
  NEXT_PUBLIC_ADMIN_ADDRESS=0x0000000000000000000000000000000000000000
  NEXT_PUBLIC_REFERRAL_ADDRESS=0x0000000000000000000000000000000000000000
  NEXT_PUBLIC_STATS_ADDRESS=0x0000000000000000000000000000000000000000

  # Network
  NEXT_PUBLIC_CHAIN_ID=31337
  EOF

  ---
  14단계: .gitignore 업데이트

  cat >> .gitignore << 'EOF'

  # Environment variables
  .env*.local

  # ABI files (나중에 추가할 것)
  lib/contracts/*.json
  EOF

  ---
  15단계: README.md 생성

  cat > README.md << 'EOF'
  # Lambda Faucet dApp

  Web3 frontend for Lambda Token Faucet.

  ## Smart Contracts
  👉 [lambda-token-faucet](https://github.com/username/lambda-token-faucet)

  ## Tech Stack
  - Next.js 14 + TypeScript
  - wagmi + viem
  - RainbowKit
  - Tailwind CSS + shadcn/ui
  - Recharts

  ## Getting Started

  ```bash
  npm install
  npm run dev

  Open http://localhost:3000

  Environment Variables

  Copy .env.local and update with your values:
  - WalletConnect Project ID
  - Contract addresses
  - Chain ID

  Development

  1. Run Hardhat node (in lambda-token-faucet):
  npx hardhat node
  2. Deploy contracts:
  npx hardhat run scripts/deploy.js --network localhost
  3. Update contract addresses in .env.local
  4. Run dev server:
  npm run dev

  Deployment

  Deploy to Vercel:
  vercel deploy
  EOF

  ---

  ### 16단계: 최종 커밋
  ```bash
  git add .
  git commit -m "Setup: Add Web3 libraries and project structure"

  ---
  ✅ 완료!

  이제 프로젝트 기본 세팅이 끝났습니다.

  다음 단계:

  1. WalletConnect Project ID 발급
    - https://cloud.walletconnect.com 가서 무료 계정 만들고 프로젝트 생성
    - Project ID 복사해서 .env.local에 붙여넣기
  2. 새 Claude 세션에서 계속
    - Temp.md 보여주고
    - "프론트엔드 컴포넌트 개발 시작하자" 라고 하면 됨
  3. 필요한 ABI 파일
    - lambda-token-faucet/artifacts/contracts/ 에서 복사 필요
    - LambdaFaucet.json
    - ReferralSystem.json
    - FaucetStats.json
    - Token.json

  ---
  현재 폴더 구조:

  lambda-faucet-dapp/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  │   ├── ui/ (shadcn)
  │   └── faucet/ (비어있음)
  ├── lib/
  │   ├── contracts/ (비어있음)
  │   ├── utils.ts
  │   └── wagmi.ts ✅
  ├── hooks/ (비어있음)
  ├── config/
  │   └── constants.ts ✅
  ├── .env.local ✅
  ├── package.json
  └── README.md ✅

  세팅 완료! 🎉
