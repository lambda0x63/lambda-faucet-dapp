"use client";

import { useWatchContractEvent } from "wagmi";
import { CONTRACTS, ABIS } from "@/lib/contracts";
import { useCallback } from "react";

interface ReferralRewardPaidEvent {
  referrer: `0x${string}`;
  newUser: `0x${string}`;
  reward: bigint;
  timestamp: bigint;
}

export function useReferralRewardPaidEvent(
  onEvent?: (event: ReferralRewardPaidEvent) => void
) {
  const handler = useCallback(
    (logs: any[]) => {
      if (logs.length > 0 && onEvent) {
        const event = {
          referrer: logs[0].args?.referrer,
          newUser: logs[0].args?.newUser,
          reward: logs[0].args?.reward,
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
    eventName: "ReferralRewardPaid",
    onLogs: handler,
  });
}
