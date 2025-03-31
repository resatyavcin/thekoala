import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import ApplicationsTabGroup from "./ApplicationsTabGroup";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 bg-slate-50">
      <Image
        width={100}
        height={100}
        src={"/icons/koala_logo.svg"}
        loading={"eager"}
        priority
        alt="working"
      />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
