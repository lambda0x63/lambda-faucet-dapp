"use client";

import { useReadContract } from "wagmi";
import { CONTRACTS, ABIS, FAUCET_PARAMS } from "@/lib/contracts";

export function useTokenBalance(address?: string) {
  const { data: balance, isLoading, error } = useReadContract({
    address: CONTRACTS.token,
    abi: ABIS.token,
    functionName: "balanceOf",
    args: address ? [address as `0x${string}`] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    balance: balance as bigint | undefined,
    isLoading,
    error,
    formatted:
      balance != null
        ? (balance / 10n ** BigInt(FAUCET_PARAMS.decimals)).toString()
        : "0",
  };
}
