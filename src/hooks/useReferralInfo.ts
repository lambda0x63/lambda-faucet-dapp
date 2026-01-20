"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useReferralInfo() {
  const { address } = useAccount();

  const { data: referralInfo, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getUserReferralInfo",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    referralInfo: referralInfo as
      | {
          referralCode: `0x${string}`;
          referredByCode: `0x${string}`;
          referrerAddress: `0x${string}`;
          referralCount: bigint;
          totalReferralReward: bigint;
          hasUsedReferralBonus: boolean;
        }
      | undefined,
    isLoading,
    error,
  };
}
