import { HeroHeader } from "@/components/header";
import { Service1 } from "@/components/ui/service1";

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <div className="pt-16">
        <Service1 />
      </div>
    </>
  );
}