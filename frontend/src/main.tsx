import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts'
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SettingsProvider } from './context/SettingsContext.tsx';
import { I18nextProvider } from "react-i18next";
import i18next from "./translations/i18";
import { CartProvider } from './context/CartContext.tsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <SettingsProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <App />
          </CartProvider>
        </QueryClientProvider>
      </SettingsProvider>
    </I18nextProvider>
  </Provider>
  ,
)
