"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convex = new ConvexReactClient("https://dutiful-mink-127.convex.cloud");
export const ConvexClientProvider = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <ClerkProvider publishableKey={"pk_test_cG93ZXJmdWwtYW50ZWF0ZXItNi5jbGVyay5hY2NvdW50cy5kZXYk"}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}