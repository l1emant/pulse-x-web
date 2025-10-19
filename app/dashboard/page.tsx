import CryptoDashboard from "@/components/crypto-dashboard";
import { DashboardHeader } from "@/components/dashboard-header";

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-background">
            <DashboardHeader />
            <CryptoDashboard />
        </main>
    );
}