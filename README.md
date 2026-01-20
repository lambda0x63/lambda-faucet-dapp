# Lambda Faucet DApp

Web3 토큰 파우셋 대시보드

## 기능

- 동적 배포 알고리즘 연동
- RainbowKit 지갑 연결
- Recharts 데이터 시각화
- 추천 시스템 인터페이스
- Sonner 트랜잭션 알림

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Wagmi / Viem
- RainbowKit
- Tailwind CSS v4
- Radix UI
- TanStack Query

## 설치

```bash
npm install
npm run dev
```

## 환경 변수

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...
NEXT_PUBLIC_FAUCET_ADDRESS=0x...
```

## 연관 프로젝트

- [lambda-token-faucet](https://github.com/lambda0x63/lambda-token-faucet) - 스마트 컨트랙트
