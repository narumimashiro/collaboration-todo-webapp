import styles from '@/styles/molecules/PageComponents.module.scss'

import { useCustomContext } from '@/components/customProvider'
import { useTranslation } from 'react-i18next'

type PageTemplateProps = {
  children: React.ReactNode
}

export const PageTemplate = ({ children }: PageTemplateProps) => {
  const { isPortrait, isTabletSize } = useCustomContext()
  const pageSize = isTabletSize ? 'tablet' : isPortrait ? 'portrait' : 'landscape'

  return <div className={styles[`page-contents-wrap-${pageSize}`]}>{children}</div>
}

// Used only in Main Page
export const MainHeader = () => {
  const { isPortrait } = useCustomContext()
  const { t } = useTranslation()

  return (
    <div
      className={`flex-center ${styles['main-header']} ${isPortrait ? styles.portrait : styles.landscape}`}>
      <h1 className={styles.title}>{t('STRID_page_Title')}</h1>
    </div>
  )
}

type PageTemplateWithHeaderProp = {
  children: React.ReactNode
}

export const PageTemplateWithHeader = (props: PageTemplateWithHeaderProp) => {
  const { children } = props

  return (
    <>
      <MainHeader />
      <PageTemplate>{children}</PageTemplate>
    </>
  )
}
