"use client";
import Header from "@/components/Header";
import ApplicationsTabGroup from "@/components/ApplicationsTabGroup";
import GroomingCardList from "@/components/GroomingCardList";
import TeamInformationDisplay from "@/components/TeamInformationDisplay";

export default function Home() {
  return (
    <div className="w-screen">
      <main>
        <Header />
      </main>

      <aside className="p-10">
        <TeamInformationDisplay />

        <GroomingCardList />
      </aside>
    </div>
  );
}
