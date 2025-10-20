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
            const { error } = await authClient.signOut();
            if (!error) {
                toast.success("Logged out successfully");
            }
            // Force reload to clear all state
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
