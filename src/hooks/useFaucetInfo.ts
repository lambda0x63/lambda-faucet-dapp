"use client";

import { useReadContract } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useFaucetInfo() {
  const { data: faucetInfo, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getFaucetInfo",
  });

  return {
    faucetInfo: faucetInfo as
      | {
          balance: bigint;
          totalRequests: bigint;
          totalDistributed: bigint;
          uniqueUsers: bigint;
          isPaused: boolean;
        }
      | undefined,
    isLoading,
    error,
  };
}
