"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/slices/languageSlice";
import useTranslation from "@/hooks/useTranslation";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { t, currentLang } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  const languages = [
    {
      code: "tr",
      label: t.TURKISH,
      flag: "/icons/turkey.png",
    },
    {
      code: "en",
      label: t.ENGLISH,
      flag: "/icons/uk.png",
    },
  ];

  return (
    <Menu>
      <MenuButton className="flex items-center space-x-2">
        <Image
          width={25}
          height={25}
          src={languages.find((lang) => lang.code === currentLang)?.flag || ""}
          alt="flag"
        />
        <span>{t[currentLang === "tr" ? "TURKISH" : "ENGLISH"]}</span>
      </MenuButton>
      <MenuItems anchor="bottom" className="bg-white shadow-lg rounded-md p-2">
        {languages.map(({ code, label, flag }) => (
          <MenuItem key={code}>
            {({ active }) => (
              <button
                className={`flex items-center space-x-2 p-2 rounded-md w-full ${
                  active ? "bg-gray-200" : ""
                }`}
                onClick={() => handleLanguageChange(code)}
              >
                <Image width={25} height={25} src={flag} alt={`${code} flag`} />
                <span>{label}</span>
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default LanguageSwitcher;
