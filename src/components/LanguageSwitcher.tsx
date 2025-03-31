"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/slices/languageSlice";
import en from "../constants/en.json";
import tr from "../constants/tr.json";
import { RootState } from "../redux/store";

const translations: Record<
  string,
  { SELECT_LANGUAGE: string; TURKISH: string; ENGLISH: string }
> = { en, tr };

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  const languages = [
    {
      code: "tr",
      label: translations[language].TURKISH,
      flag: "/icons/turkey.png",
    },
    {
      code: "en",
      label: translations[language].ENGLISH,
      flag: "/icons/uk.png",
    },
  ];

  return (
    <Menu>
      <MenuButton className="flex items-center space-x-2">
        <Image
          width={25}
          height={25}
          src={languages.find((lang) => lang.code === language)?.flag || ""}
          alt="flag"
        />
        <span>
          {translations[language][language === "tr" ? "TURKISH" : "ENGLISH"]}
        </span>
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
