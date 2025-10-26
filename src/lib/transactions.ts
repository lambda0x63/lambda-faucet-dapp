import { toast } from "sonner";

export function handleTransactionSuccess(message: string) {
  toast.success(message, {
    description: "Transaction completed successfully",
  });
}

export function handleTransactionError(error: Error | string) {
  const message = typeof error === "string" ? error : error.message;
  toast.error("Transaction failed", {
    description: message,
  });
}

export function handleTransactionPending(message: string = "Processing...") {
  toast.loading(message);
}
