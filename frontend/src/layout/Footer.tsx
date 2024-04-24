import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="border-t-2 ">
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white text-sm hidden sm:block">
        <div className="max-w-5xl mx-auto flex py-1">
          <div className="p-2 border-r-2">
          {t('footer.col_1')}
          </div>
          <div className="px-3 py-2 border-r-2">
          {t('footer.col_2')}
          </div>
          <div className="px-3 py-2 border-r-2">
          {t('footer.col_3')}
          </div>
          <div className="px-3 py-2 border-r-2">
          {t('footer.col_4')}
          </div>
          <div className="px-3 py-2">
          {t('footer.col_5')}
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-2">
        {t('footer.bottom')} <b>
        {t('footer.group')}
          </b>
      </div>
    </footer>
  )
}

export default Footer