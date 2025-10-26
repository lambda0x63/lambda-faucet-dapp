import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatNumber(num: number, decimals: number = 2): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

export function formatBalance(balance: bigint | string, decimals: number = 18): string {
  if (typeof balance === "string") {
    balance = BigInt(balance);
  }
  const divisor = BigInt(10 ** decimals);
  const wholeNumber = balance / divisor;
  const remainder = balance % divisor;

  const formattedWhole = wholeNumber.toString();
  const formattedRemainder = remainder
    .toString()
    .padStart(decimals, "0")
    .slice(0, 2);

  return `${formattedWhole}.${formattedRemainder}`;
}
