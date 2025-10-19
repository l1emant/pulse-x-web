import CoinDetail from "@/components/coin-detail";
import { DashboardHeader } from "@/components/dashboard-header";

interface CoinPageProps {
  params: {
    id: string;
  };
}

export default function CoinPage({ params }: CoinPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <CoinDetail coinId={params.id} />
    </main>
  );
}