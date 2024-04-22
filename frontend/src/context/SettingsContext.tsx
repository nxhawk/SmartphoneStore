import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface SettingsContextType {
  theme: string;
  language: string;
  setTheme: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: React.FC<SettingsProviderProps> = ({children}) =>{

  const [theme, setTheme] = useState<string>('Light');
  const [language, setLanguage] = useState<string>('VN');

  return (
    <SettingsContext.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };