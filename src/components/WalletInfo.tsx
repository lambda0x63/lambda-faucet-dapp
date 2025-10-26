"use client";

import { useAccount } from "wagmi";
import { formatAddress } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function WalletInfo() {
  const { address, isConnected, chain } = useAccount();

  if (!isConnected || !address) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="space-y-3">
        <div>
          <p className="text-sm text-muted-foreground">Wallet Address</p>
          <p className="font-mono text-lg font-semibold">{formatAddress(address)}</p>
        </div>
        {chain && (
          <div>
            <p className="text-sm text-muted-foreground">Network</p>
            <Badge variant="outline">{chain.name}</Badge>
          </div>
        )}
      </div>
    </div>
  );
}
