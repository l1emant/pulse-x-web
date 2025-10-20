"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function Logout() {
    const handleLogout = async () => {
        try {
            console.log('Starting logout process...');
            
            // Use better-auth's signOut method which properly clears the session
            const result = await authClient.signOut();
            console.log('Logout result:', result);
            
            console.log('Logout successful, redirecting...');
            toast.success("Logged out successfully");
            
            // Force a hard redirect to ensure all client state is cleared
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
            // Even if logout fails, redirect to home page
            window.location.href = "/";
        }
    };

    return (
        <Button variant="outline" onClick={handleLogout}>
            Logout <LogOut className="size-4" />
        </Button>
    );
}
