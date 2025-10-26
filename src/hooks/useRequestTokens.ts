"use client";

import { useWriteContract } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";
import { useState } from "react";

export function useRequestTokens() {
  const [isLoading, setIsLoading] = useState(false);
  const { writeContract, isPending } = useWriteContract();

  const requestTokens = async (referralCode: `0x${string}` = "0x") => {
    setIsLoading(true);
    try {
      writeContract({
        address: CONTRACTS.faucet,
        abi: ABIS.faucet,
        functionName: "requestTokens",
        args: [referralCode],
      });
    } catch (error) {
      console.error("Error requesting tokens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    requestTokens,
    isLoading: isLoading || isPending,
  };
}
