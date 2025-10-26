# Lambda Faucet Project - 맥락 정리

## 📋 프로젝트 개요
### 현재 완료된 것: 백엔드 (Smart Contracts)
- **레포명**: `lambda-token-faucet`
- **목적**: ERC-20 기반 Lambda 토큰 Faucet 시스템
- **총 코드**: 1,482줄 Solidity
- **상태**: ✅ 완료, 컴파일 성공

---

## 🏗️ 아키텍처

### 컨트랙트 구조 (모듈화 설계)
```
contracts/
├── Token.sol (10줄)
│   └── ERC-20 Lambda Token (LMDA)
│
├── LambdaFaucet.sol (419줄) ⭐ 메인 허브
│   └── 모든 모듈 통합, ReentrancyGuard
│
├── FaucetAdmin.sol (339줄)
│   ├── Ownable2Step (안전한 소유권 이전)
│   ├── Pausable (긴급 정지)
│   ├── Operator 역할
│   ├── Blacklist 관리
│   └── Dynamic 설정 관리
│
├── ReferralSystem.sol (244줄)
│   ├── 추천 코드 생성 (keccak256)
│   ├── 신규 사용자 20% 보너스
│   ├── 추천인 10% 리워드
│   └── 추천 통계 추적
│
├── FaucetStats.sol (293줄)
│   ├── 글로벌 통계 (총 요청, 배포량, 사용자 수)
│   ├── 사용자별 통계
│   └── 평균/최대 요청량 추적
│
└── libraries/
    └── FaucetMath.sol (177줄)
        ├── Balance-based multiplier (5단계)
        ├── Time-based multiplier (UTC 3단계)
        ├── Dynamic cooldown (4단계)
        └── Referral bonus 계산
```

---

## 🎯 핵심 기능

### 1. 관리자 시스템
- Owner (최고 관리자)
- Operator (제한된 권한)
- Pause/Unpause
- Blacklist 관리
- 파라미터 설정

### 2. Dynamic Distribution (동적 지급)
**잔액 기반 (5단계):**
- 100-75%: 100% multiplier
- 75-50%: 80% multiplier
- 50-25%: 50% multiplier
- 25-10%: 30% multiplier
- <10%: 10% multiplier

**시간 기반 (UTC, 3단계):**
- 00:00-08:00: 120% (off-peak)
- 08:00-16:00: 100% (normal)
- 16:00-24:00: 80% (peak)

**Cooldown 조절 (4단계):**
- 0-10 req/hour: 1x
- 11-50 req/hour: 2x
- 51-100 req/hour: 4x
- 100+ req/hour: 8x

### 3. Referral System (추천인)
- 자동 추천 코드 생성
- 신규 사용자: +20% 보너스 (1회)
- 추천인: +10% 보상 (추천받은 수만큼)
- 자기 추천 방지
- 통계 추적

### 4. Statistics (통계)
**글로벌:**
- 총 요청 수
- 총 배포량
- 고유 사용자 수

**사용자별:**
- 요청 횟수
- 총 수령량
- 첫/마지막 요청 시간
- 최대/평균 요청량

---

## 🔒 보안 기능

1. **ReentrancyGuard** - 재진입 공격 방지
2. **Ownable2Step** - 안전한 소유권 이전
3. **Pausable** - 긴급 정지
4. **Blacklist** - 악용 방지
5. **입력 검증** - 모든 파라미터 검증
6. **Solidity 0.8.27** - 자동 오버플로우 보호

---

## 📊 기본 파라미터

```solidity
baseAmountPerRequest: 100 LMDA (100 * 10^18)
baseCooldownTime: 1 hour
maxSupply: 500,000 LMDA
dynamicEnabled: true
referralBonus (new user): 20%
referralReward (referrer): 10%
```

---

## 🎨 사용자 플로우

### 토큰 요청 플로우
```
1. user.requestTokens(referralCode) 호출
   ↓
2. Admin 체크 (paused? blacklisted?)
   ↓
3. Cooldown 체크 (dynamic)
   ↓
4. 첫 사용자인가?
   - Yes: 추천 코드 등록 or 생성
   - No: 다음 단계
   ↓
5. 지급량 계산
   - baseAmount
   - × balanceMultiplier
   - × timeMultiplier
   - + referralBonus (첫 사용자)
   ↓
6. Faucet 잔액 확인
   ↓
7. 토큰 전송
   ↓
8. 추천인에게 보상 (해당 시)
   ↓
9. 통계 업데이트
   ↓
10. 이벤트 발행
```

---

## 📝 주요 함수들

### LambdaFaucet.sol
```solidity
// 메인 함수
requestTokens(bytes32 referralCode)

// 조회 함수
getTimeUntilNextRequest(address user)
getEstimatedAmount(address user)
getMyReferralCode()
getFaucetInfo()
getCurrentMultipliers()
getUserStatus(address user)
getUserReferralInfo(address user)

// Admin
fundFaucet(uint256 amount)
emergencyWithdraw(address token, address to, uint256 amount)
```

### FaucetAdmin.sol
```solidity
// Owner 전용
setBaseAmountPerRequest(uint256)
setBaseCooldownTime(uint256)
setDynamicConfig(bool, uint256, uint256)
pause() / unpause()

// Operator or Owner
addToBlacklist(address)
removeFromBlacklist(address)
```

### ReferralSystem.sol
```solidity
generateReferralCode(address user)
registerReferral(address newUser, bytes32 code)
calculateReferralBonus(address user, uint256 baseAmount)
getReferralInfo(address user)
```

### FaucetStats.sol
```solidity
recordRequest(address user, uint256 amount, bool isFirstTime)
getGlobalStats()
getUserStats(address user)
getUserReport(address user)
```

---

## 🚀 다음 단계: 프론트엔드 개발

### 새 프로젝트 생성
- **레포명**: `lambda-faucet-dapp`
- **목적**: Lambda Faucet 웹 인터페이스
- **타입**: Web3 dApp (프론트엔드)

### 기술 스택 (추천)
```typescript
Framework: Next.js 14 + TypeScript
Web3: wagmi + viem
Wallet: RainbowKit
UI: Tailwind CSS + shadcn/ui
Charts: Recharts
Animation: Framer Motion
Deployment: Vercel
```

### 주요 기능 (프론트엔드)
```
1. 지갑 연결 (MetaMask, WalletConnect 등)
2. 토큰 요청 버튼
3. 실시간 카운트다운 타이머 (다음 요청까지)
4. 내 통계 표시
   - 잔액
   - 총 수령량
   - 요청 횟수
5. 추천 코드 표시 + 복사/공유
6. 추천 통계 (몇 명 초대, 얼마 받았는지)
7. 글로벌 통계 차트
8. 실시간 요청 피드 (이벤트 리스닝)
9. Faucet 잔액 표시
10. 현재 multiplier 표시
```

### 배포 계획
```
Phase 1: 로컬 Hardhat 네트워크로 개발
Phase 2: Sepolia 테스트넷 배포
Phase 3: 프론트엔드 Vercel 배포
Phase 4: 테스트 & 최적화
```

---

## 📦 배포 순서 (컨트랙트)

```bash
# 1. Token 배포
# 2. FaucetAdmin 배포 (owner, baseAmount, baseCooldown)
# 3. FaucetStats 배포 (faucet placeholder)
# 4. ReferralSystem 배포 (faucet placeholder)
# 5. LambdaFaucet 배포 (token, admin, referral, stats)
# 6. FaucetAdmin.setFaucet(LambdaFaucet)
# 7. ReferralSystem.updateFaucet(LambdaFaucet)
# 8. FaucetStats.updateFaucet(LambdaFaucet)
# 9. Token.transfer(LambdaFaucet, amount) - Faucet에 토큰 전송
```

---

## 🔗 레포 구조

### 백엔드 (현재 레포)
```
lambda-token-faucet/
├── contracts/
│   ├── Token.sol
│   ├── LambdaFaucet.sol
│   ├── FaucetAdmin.sol
│   ├── ReferralSystem.sol
│   ├── FaucetStats.sol
│   └── libraries/
│       └── FaucetMath.sol
├── scripts/
├── test/
├── hardhat.config.js
└── README.md

Description: ERC-20 based Lambda token faucet system
Topics: solidity, erc20, faucet, lambda-token, ethereum
```

### 프론트엔드 (새로 만들 레포)
```
lambda-faucet-dapp/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── config/
├── public/
├── package.json
└── README.md

Description: Web3 frontend for Lambda Token Faucet
Topics: nextjs, web3, wagmi, dapp, ethereum
```

---

## 💡 프론트엔드 개발 시 필요한 정보

### 컨트랙트 주소들 (배포 후)
```typescript
// config.ts
export const contracts = {
  token: "0x...",           // Token.sol
  faucet: "0x...",         // LambdaFaucet.sol
  admin: "0x...",          // FaucetAdmin.sol
  referral: "0x...",       // ReferralSystem.sol
  stats: "0x..."           // FaucetStats.sol
}

export const CHAIN_ID = 11155111 // Sepolia
```

### ABI 필요한 컨트랙트
```
- LambdaFaucet.sol (메인)
- ReferralSystem.sol (추천 코드 조회)
- FaucetStats.sol (통계 조회)
- Token.sol (잔액 조회)
```

### 이벤트 리스닝
```solidity
// LambdaFaucet
event TokensRequested(address indexed user, uint256 amount, ...)
event ReferralRewardPaid(address indexed referrer, ...)

// ReferralSystem
event ReferralCodeGenerated(address indexed user, bytes32 code)
event ReferralRegistered(address indexed newUser, ...)

// FaucetStats
event StatsRecorded(address indexed user, uint256 amount, ...)
```

---

## 🎯 UI/UX 구성 (참고)

### 메인 페이지
```
┌─────────────────────────────────────┐
│  Header: Logo + Connect Wallet      │
├─────────────────────────────────────┤
│  Hero Section                       │
│  - Faucet 소개                      │
│  - 현재 Faucet 잔액                 │
│  - 현재 Multiplier 표시             │
├─────────────────────────────────────┤
│  Request Section (지갑 연결 시)     │
│  - Your Balance: XXX LMDA           │
│  - Next Request: 00:45:23 ⏰        │
│  - [Request Tokens] Button          │
│  - Estimated Amount: ~100 LMDA      │
├─────────────────────────────────────┤
│  Referral Section                   │
│  - Your Code: 0x3a4f... [Copy]      │
│  - Referrals: 7 people              │
│  - Rewards: 70 LMDA                 │
├─────────────────────────────────────┤
│  Your Stats                         │
│  - Total Received: 1,500 LMDA       │
│  - Requests: 15                     │
│  - First Request: 2025-10-01        │
├─────────────────────────────────────┤
│  Global Stats (차트)                │
│  - Total Distributed                │
│  - Active Users                     │
│  - Recent Requests Feed             │
└─────────────────────────────────────┘
```

---

## 📚 참고 자료

### 컨트랙트 상세
- Solidity 버전: ^0.8.27
- OpenZeppelin 버전: 최신
- Hardhat 설정: hardhat.config.js 참조

### 설계 철학
- **모듈화**: 각 기능을 독립된 컨트랙트로 분리
- **보안 우선**: OpenZeppelin 표준 사용
- **가스 최적화**: Library 사용, view 함수 활용
- **확장성**: 각 모듈 독립 업그레이드 가능

### Admin 접근 방식
- 현재: Owner 중심 (재단 모델)
- 향후 옵션: Multi-Sig, Time Lock, DAO 거버넌스
- 테스트넷이므로 현재 구조로 충분

---

## 🔧 컴파일 & 테스트

```bash
# 컴파일
npx hardhat compile
# ✅ 성공 (1,482줄)

# 테스트 (TODO)
npx hardhat test

# 배포 (Sepolia)
npx hardhat run scripts/deploy.js --network sepolia

# 검증 (Etherscan)
npx hardhat verify --network sepolia [주소] [constructor args]
```

---

## 🎨 다음 세션에서 할 일

### 1. 새 레포 생성
```bash
mkdir lambda-faucet-dapp
cd lambda-faucet-dapp
git init
```

### 2. Next.js 프로젝트 셋업
```bash
npx create-next-app@latest .
# TypeScript, Tailwind, App Router 선택
```

### 3. Web3 라이브러리 설치
```bash
npm install wagmi viem @tanstack/react-query
npm install @rainbow-me/rainbowkit
```

### 4. 기본 구조 생성
```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── WalletConnect.tsx
│   ├── FaucetRequest.tsx
│   ├── UserStats.tsx
│   ├── ReferralCode.tsx
│   └── GlobalStats.tsx
├── lib/
│   ├── contracts.ts (ABI, 주소)
│   └── wagmi.ts (설정)
└── config/
    └── constants.ts
```

### 5. 로컬 Hardhat 노드로 먼저 개발
```bash
# 터미널 1: Hardhat 노드 실행
npx hardhat node

# 터미널 2: 컨트랙트 배포
npx hardhat run scripts/deploy.js --network localhost

# 터미널 3: 프론트엔드 개발
cd ../lambda-faucet-dapp
npm run dev
```

---

## 🚨 주의사항

### 프론트엔드 개발 시
1. **ABI 파일 복사**: `artifacts/` 에서 필요한 ABI 가져오기
2. **컨트랙트 주소**: 배포 후 주소 config에 저장
3. **네트워크 설정**: Sepolia 또는 localhost
4. **이벤트 리스닝**: useWatchContractEvent 활용
5. **에러 핸들링**: 트랜잭션 실패 케이스 대응

### 테스트넷 배포 시
1. **Sepolia ETH**: Faucet에서 무료로 받기
2. **순서 지키기**: 배포 순서 중요 (위 참조)
3. **Verify**: Etherscan 검증 필수
4. **Faucet 충전**: Lambda 토큰 넉넉히 전송

---

## 📞 컨트랙트 인터페이스 Quick Reference

### 사용자가 가장 많이 호출할 함수
```solidity
// 토큰 요청
LambdaFaucet.requestTokens(bytes32 referralCode)

// 조회
LambdaFaucet.getTimeUntilNextRequest(address user) returns (uint256)
LambdaFaucet.getEstimatedAmount(address user) returns (uint256)
LambdaFaucet.getMyReferralCode() returns (bytes32)
LambdaFaucet.getUserStatus(address user) returns (bool, uint256, uint256, uint256, uint256)

// 통계
FaucetStats.getUserStats(address user) returns (UserStats)
FaucetStats.getGlobalStats() returns (GlobalStats)

// 추천
ReferralSystem.getReferralInfo(address user) returns (ReferralData)
```

---

## ✅ 현재 상태

- ✅ Solidity 컨트랙트 완료 (1,482줄)
- ✅ 컴파일 성공
- ✅ 설계 문서화
- ✅ README 업데이트
- ⏳ 테스트 코드 (TODO)
- ⏳ 배포 스크립트 (TODO)
- ⏳ 프론트엔드 (다음 세션)

---

## 🎯 최종 목표

```
완성품:
1. Smart Contracts (Sepolia) ✅ (코드 완료)
2. Web Frontend (Vercel) ⏳ (다음)
3. Live Demo URL
4. GitHub 2개 레포 연결
5. 포트폴리오 프로젝트 완성

→ 실제로 작동하는 Lambda Faucet 서비스!
```

---

## 📌 중요 포인트

1. **모듈화 설계**: 각 기능이 독립된 컨트랙트
2. **Dynamic 시스템**: 잔액/시간/트래픽 기반 자동 조절
3. **Referral**: 바이럴 확산 가능한 추천 시스템
4. **통계**: 모든 활동 추적
5. **보안**: OpenZeppelin + Best Practices
6. **확장성**: 나중에 DAO로 전환 가능

---

## 🔥 프론트엔드에서 구현할 핵심

1. **지갑 연결** (RainbowKit)
2. **트랜잭션 전송** (requestTokens)
3. **실시간 타이머** (다음 요청까지)
4. **이벤트 리스닝** (새 요청 표시)
5. **통계 시각화** (차트)
6. **추천 코드 공유** (복사/SNS)

---

이 문서를 다음 세션에서 참고하여 프론트엔드 개발을 시작하세요! 🚀


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
