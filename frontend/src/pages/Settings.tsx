import React from "react";
import { SettingsContext } from "../context/SettingsContext";
import ButtonSetting from "../components/ButtonSetting";

const Settings = () => {
  const { theme, setTheme, language, setLanguage} =
  React.useContext(SettingsContext)!;

  return (
    <div className="mt-2">
      <div className="flex gap-10 items-center mb-3">
        <div className="font-bold text-lg">Language: </div>
        <div className="flex gap-5">
          <ButtonSetting 
            action={setLanguage}
            currentValue={language}
            name="vi"
          />
          <ButtonSetting 
            action={setLanguage}
            currentValue={language}
            name="en"
          />
          <ButtonSetting 
            action={setLanguage}
            currentValue={language}
            name="ch"
          />
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="font-bold text-lg">Theme: </div>
        <div className="flex gap-5">
          <ButtonSetting 
            action={setTheme}
            currentValue={theme}
            name="light"
          />
          <ButtonSetting 
            action={setTheme}
            currentValue={theme}
            name="dark"
          />
        </div>
      </div>
    </div>
  )
}

export default Settings