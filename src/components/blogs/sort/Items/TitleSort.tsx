import styleBlogList from '../../../../Style/blogList.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const TitleSortBlogs = () => {

  const { t } = useTranslation();
  return (
    <>
      <h1 className={styleBlogList.sortingTitle} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("order")}</h1>
    </>
  )
}

export { TitleSortBlogs }