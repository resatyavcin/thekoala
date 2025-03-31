import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ComingSoon from "@/components/ComingSoon";
export default function Home() {
  return (
    <div className="w-screen">
      <main>
        <aside>
          <TabGroup className="flex flex-col justify-center items-center mt-7 text-center">
            <TabList className="inline-block p-3 bg-indigo-950 rounded-md">
              <Tab className="text-slate-50 outline-none text-md font-bold data-[selected]:border data-[selected]:rounded-md py-2 px-3 data-[selected]:bg-slate-50 data-[selected]:text-indigo-950">
                Grooming
              </Tab>
              <Tab className="relative outline-none text-slate-50  text-md font-bold data-[selected]:border data-[selected]:rounded-md py-2 px-3 data-[selected]:bg-slate-50 data-[selected]:text-indigo-950">
                Retrospective
                <span className="text-xs bg-amber-600 rounded-2xl p-1 absolute -top-3 -right-5 text-slate-50">
                  Yakında
                </span>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Content 1</TabPanel>
              <TabPanel>
                <ComingSoon />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </aside>
      </main>
    </div>
  );
}
