import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { hardhat, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Lambda Faucet",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "default",
  chains: [hardhat, sepolia],
  ssr: true,
  wallets: [
    {
      groupName: "Popular",
      wallets: [metaMaskWallet],
    },
  ],
});
