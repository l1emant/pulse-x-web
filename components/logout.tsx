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
            console.log('Cookies before logout:', document.cookie);
            await authClient.signOut();
            
            // Clear all possible session cookies
            const cookiesToClear = [
                'better-auth.session_token',
                'better-auth.session',
                'session_token',
                'session',
                'auth_session',
                'authjs.session-token'
            ];
            
            cookiesToClear.forEach(name => {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            });
            
            console.log('Cookies after logout:', document.cookie);
            toast.success("Logged out successfully");
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
            window.location.href = "/";
        }
    };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout <LogOut className="size-4" />
    </Button>
  );


}
