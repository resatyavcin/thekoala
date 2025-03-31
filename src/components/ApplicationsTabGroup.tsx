import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import useTranslation from "@/hooks/useTranslation";
import ComingSoon from "./ComingSoon";
import GroomingCardList from "./GroomingCardList";

const ApplicationsTabGroup = () => {
  const { t } = useTranslation();

  return (
    <aside>
      <TabGroup className="flex flex-col justify-center items-center mt-7 mr-auto">
        <TabList className="inline-block p-3 bg-gradient-to-tr from-indigo-900 to-indigo-700 rounded-md">
          <Tab className="text-slate-50 outline-none text-md font-bold  data-[selected]:rounded-md py-2 px-3 data-[selected]:bg-slate-50 data-[selected]:text-indigo-950">
            Grooming
          </Tab>
          <Tab className="relative outline-none text-slate-50  text-md font-bold data-[selected]:rounded-md py-2 px-3 data-[selected]:bg-slate-50 data-[selected]:text-indigo-950">
            Retrospective
            <span className="text-xs bg-amber-600 rounded-2xl p-1 absolute -top-3 -right-5 text-slate-50">
              {t.SOON}
            </span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GroomingCardList />
          </TabPanel>
          <TabPanel>
            <ComingSoon />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </aside>
  );
};

export default ApplicationsTabGroup;
