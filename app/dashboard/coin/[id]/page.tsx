import CoinDetail from "@/components/coin-detail";
import { DashboardHeader } from "@/components/dashboard-header";

interface CoinPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <CoinDetail coinId={id} />
    </main>
  );
}