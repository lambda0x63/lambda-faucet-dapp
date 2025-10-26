// Contract addresses (update after deployment)
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
