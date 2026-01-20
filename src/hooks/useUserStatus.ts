"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useUserStatus() {
  const { address } = useAccount();

  const { data: userStatus, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getUserStatus",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    userStatus: userStatus as
      | {
          isFirstTime: boolean;
          lastRequestTime: bigint;
          cooldownUntil: bigint;
          totalRequests: bigint;
          totalReceived: bigint;
        }
      | undefined,
    isLoading,
    error,
  };
}
