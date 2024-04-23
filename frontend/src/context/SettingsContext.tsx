import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

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
  
  const [theme, setTheme] = useLocalStorageState({
    key: 'theme',
    initialState: 'light',
  });
  const [language, setLanguage] = useLocalStorageState({
    key: 'language',
    initialState: 'vi',
  });

  return (
    <SettingsContext.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };