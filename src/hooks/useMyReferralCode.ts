"use client";

import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";

export function useMyReferralCode() {
  const { address } = useAccount();

  const { data: referralCode, isLoading, error } = useReadContract({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    functionName: "getMyReferralCode",
    query: {
      enabled: !!address,
    },
  });

  return {
    referralCode: referralCode as `0x${string}` | undefined,
    isLoading,
    error,
  };
}
