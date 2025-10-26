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
```

## Environment Variables

Copy `.env.local` and update with your values:
- WalletConnect Project ID (https://cloud.walletconnect.com)
- Contract addresses
- Chain ID

## Development

1. Run Hardhat node (in lambda-token-faucet):
```bash
npx hardhat node
```

2. Deploy contracts:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Update contract addresses in `.env.local`

4. Run dev server:
```bash
npm run dev
```

## Deployment

Deploy to Vercel:
```bash
vercel deploy
```

## Project Structure

```
src/
├── app/
├── components/
│   ├── ui/ (shadcn components)
│   └── faucet/
├── lib/
│   ├── contracts/
│   ├── utils.ts
│   └── wagmi.ts
├── hooks/
└── config/
    └── constants.ts
```
