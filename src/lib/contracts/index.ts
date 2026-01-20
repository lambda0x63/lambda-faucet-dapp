import LambdaTokenAbi from "./abis/LambdaToken.json";
import LambdaFaucetAbi from "./abis/LambdaFaucet.json";
import FaucetAdminAbi from "./abis/FaucetAdmin.json";
import ReferralSystemAbi from "./abis/ReferralSystem.json";
import FaucetStatsAbi from "./abis/FaucetStats.json";

// Contract addresses (update after deployment)
export const CONTRACTS = {
  token: (process.env.NEXT_PUBLIC_TOKEN_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
  faucet: (process.env.NEXT_PUBLIC_FAUCET_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
  admin: (process.env.NEXT_PUBLIC_ADMIN_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
  referral: (process.env.NEXT_PUBLIC_REFERRAL_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
  stats: (process.env.NEXT_PUBLIC_STATS_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
} as const;

// Contract ABIs
export const ABIS = {
  token: LambdaTokenAbi as any[],
  faucet: LambdaFaucetAbi as any[],
  admin: FaucetAdminAbi as any[],
  referral: ReferralSystemAbi as any[],
  stats: FaucetStatsAbi as any[],
} as const;

// Chain ID
export const CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID || "31337"
);

// Base parameters
export const FAUCET_PARAMS = {
  baseAmount: 100n * 10n ** 18n, // 100 LMDA
  baseCooldown: 3600, // 1 hour
  decimals: 18,
} as const;
