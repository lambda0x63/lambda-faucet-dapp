"use client";

import { useReadContract } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useGlobalStats() {
  const { data: globalStats, isLoading, error } = useReadContract({
    address: CONTRACTS.stats,
    abi: ABIS.stats,
    functionName: "getGlobalStats",
  });

  return {
    globalStats: globalStats as
      | {
          totalRequests: bigint;
          totalDistributed: bigint;
          uniqueUsers: bigint;
        }
      | undefined,
    isLoading,
    error,
  };
}
