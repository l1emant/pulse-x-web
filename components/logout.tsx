"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";


export function Logout() {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Button variant="outline" onClick={handleLogout}>Logout<LogOut className="size-4"/></Button>
    </div>
  );

}
