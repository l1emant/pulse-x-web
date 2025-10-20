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
                        toast.success("Logged out successfully");
                        window.location.href = "/";
                    }
                }
            });
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
