"use client";

import { useWatchContractEvent } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";
import { useCallback } from "react";

interface TokensRequestedEvent {
  user: `0x${string}`;
  amount: bigint;
  multipliers: {
    balance: bigint;
    time: bigint;
  };
  isFirstTime: boolean;
  timestamp: bigint;
}

export function useTokensRequestedEvent(
  onEvent?: (event: TokensRequestedEvent) => void
) {
  const handler = useCallback(
    (logs: any[]) => {
      if (logs.length > 0 && onEvent) {
        const event = {
          user: logs[0].args?.user,
          amount: logs[0].args?.amount,
          multipliers: logs[0].args?.multipliers,
          isFirstTime: logs[0].args?.isFirstTime,
          timestamp: logs[0].args?.timestamp,
        };
        onEvent(event);
      }
    },
    [onEvent]
  );

  useWatchContractEvent({
    address: CONTRACTS.faucet,
    abi: ABIS.faucet,
    eventName: "TokensRequested",
    onLogs: handler,
  });
}
