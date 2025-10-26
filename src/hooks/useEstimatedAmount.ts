"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useEstimatedAmount() {
  const { address } = useAccount();

  const { data: estimatedAmount, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getEstimatedAmount",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    estimatedAmount: estimatedAmount as bigint | undefined,
    isLoading,
    error,
  };
}
