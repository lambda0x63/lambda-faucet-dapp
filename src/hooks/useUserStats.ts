"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useUserStats() {
  const { address } = useAccount();

  const { data: userStats, isLoading, error } = useReadContract({
    address: CONTRACTS.stats,
    abi: ABIS.stats,
    functionName: "getUserStats",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    userStats: userStats as
      | {
          totalRequests: bigint;
          totalReceived: bigint;
          firstRequestTime: bigint;
          lastRequestTime: bigint;
          maxSingleRequest: bigint;
          averageRequest: bigint;
        }
      | undefined,
    isLoading,
    error,
  };
}
