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
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        // Clear all cookies
                        document.cookie.split(";").forEach(function(c) { 
                            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
                        });
                        toast.success("Logged out successfully");
                        window.location.replace("/");
                    }
                }
            });
        } catch (error) {
            console.error("Logout failed:", error);
            // Force clear cookies even on error
            document.cookie.split(";").forEach(function(c) { 
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
            });
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
