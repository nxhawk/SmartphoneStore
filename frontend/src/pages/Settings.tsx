import React from "react";
import { SettingsContext } from "../context/SettingsContext";
import ButtonSetting from "../components/ButtonSetting";

const Settings = () => {
  const { theme, setTheme, language, setLanguage} =
  React.useContext(SettingsContext)!;

  return (
    <div className="mt-2">
      <div className="flex gap-10 items-center">
        <div className="font-bold text-lg">Language: </div>
        <div className="flex gap-5">
          <ButtonSetting 
            action={setLanguage}
            currentValue={language}
            name="VN"
          />
          <ButtonSetting 
            action={setLanguage}
            currentValue={language}
            name="EN"
          />
        </div>
      </div>
    </div>
  )
}

export default Settings