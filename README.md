# Lambda Faucet dApp

Web3 token faucet with dynamic multipliers and referral system.

## Setup

```bash
npm install
npm run dev
```

## Tech Stack

Next.js 14, TypeScript, wagmi, viem, RainbowKit, Tailwind CSS

## Environment

Create `.env.local`:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

## Smart Contracts

- LambdaFaucet - Token distribution
- FaucetStats - Statistics
- ReferralSystem - Referrals

[lambda-token-faucet](https://github.com/lambda0x63/lambda-token-faucet)

## Pages

- `/` - Landing
- `/faucet` - Claim tokens
- `/stats` - Analytics
- `/docs` - Documentation
- `/how-it-works` - Protocol
