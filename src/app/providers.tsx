"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          locale="en-US"
          theme={{
            blurs: {
              modalOverlay: "blur(4px)",
            },
            colors: {
              accentColor: "var(--foreground)",
              accentColorForeground: "var(--background)",
              actionButtonBorder: "var(--foreground)",
              actionButtonBorderMobile: "var(--foreground)",
              actionButtonSecondaryBackground: "var(--card)",
              closeButton: "var(--foreground)",
              closeButtonBackground: "var(--background)",
              connectButtonBackground: "var(--background)",
              connectButtonBackgroundError: "var(--destructive)",
              connectButtonInnerBackground: "var(--background)",
              connectButtonText: "var(--foreground)",
              connectButtonTextError: "var(--destructive)",
              connectionIndicator: "var(--accent)",
              downloadBottomCardBackground: "linear-gradient(var(--card), var(--background))",
              downloadTopCardBackground: "linear-gradient(var(--background), var(--card))",
              error: "var(--destructive)",
              generalBorder: "var(--border)",
              generalBorderDim: "var(--border)",
              menuItemBackground: "var(--card)",
              modalBackdrop: "rgba(0, 0, 0, 0.5)",
              modalBackground: "var(--card)",
              modalBorder: "var(--border)",
              modalText: "var(--foreground)",
              modalTextDim: "var(--muted-foreground)",
              modalTextSecondary: "var(--muted-foreground)",
              profileAction: "var(--card)",
              profileActionHover: "var(--accent)",
              profileForeground: "var(--card)",
              selectedOptionBorder: "var(--foreground)",
              standby: "var(--muted-foreground)",
            },
            fonts: {
              body: '"Oswald", sans-serif',
            },
            radii: {
              actionButton: "0px",
              connectButton: "0px",
              menuButton: "0px",
              modal: "0px",
              modalMobile: "0px",
            },
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
