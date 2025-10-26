# Lambda Faucet dApp

Web3 frontend for Lambda Token distribution protocol.

## Tech Stack

- **Framework**: Next.js 14 + TypeScript
- **Web3**: wagmi + viem + RainbowKit
- **Styling**: Tailwind CSS + shadcn/ui
- **Smart Contracts**: Connected via wagmi hooks

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_id
```

Get WalletConnect Project ID: https://cloud.walletconnect.com

## Smart Contracts

Connected contracts:
- `LambdaFaucet` - Token distribution
- `FaucetStats` - Statistics tracking
- `ReferralSystem` - Referral management

See: [lambda-token-faucet](https://github.com/lambda0x63/lambda-token-faucet)

## Features

- 🪙 **Token Claiming** - Dynamic multipliers (balance, time, cooldown)
- 📊 **Analytics** - User stats and global metrics
- 🔗 **Referral System** - Share code, earn rewards
- 💼 **Wallet Integration** - MetaMask + RainbowKit

## Project Structure

```
src/
├── app/              # Pages (faucet, stats, docs, etc)
├── components/       # Reusable components
├── hooks/            # wagmi contract hooks
├── lib/
│   ├── contracts/    # Contract ABIs & addresses
│   └── wagmi.ts      # Web3 config
└── config/           # Constants
```

## Pages

- `/` - Landing page
- `/faucet` - Token claiming interface
- `/stats` - User analytics
- `/docs` - Documentation
- `/how-it-works` - Protocol mechanics
