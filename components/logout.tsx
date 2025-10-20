"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export function Logout() {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await authClient.signOut();
            // Manually clear the session cookie
            document.cookie = 'better-auth.session_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            toast.success("Logged out successfully");
            // Force a hard reload to clear all state
            window.location.replace("/");
        } catch (error) {
            console.error("Logout failed:", error);
            // Force clear cookie even on error
            document.cookie = 'better-auth.session_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            toast.error("Logout failed. Please try again.");
            window.location.replace("/");
        }
    };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout <LogOut className="size-4" />
    </Button>
  );


}
