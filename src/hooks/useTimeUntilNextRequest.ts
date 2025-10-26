"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useTimeUntilNextRequest() {
  const { address } = useAccount();

  const { data: timeUntilNext, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getTimeUntilNextRequest",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    timeUntilNext: timeUntilNext as bigint | undefined,
    isLoading,
    error,
    canRequest: timeUntilNext === 0n,
  };
}
