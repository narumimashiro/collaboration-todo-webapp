import type { GetStaticPaths, GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'

// MyComponents
import Meta from '@/components/meta'
import { PageTemplateWithHeader } from '@/components/molecules/pageComponents'

export const getStaticPaths: GetStaticPaths = async () => {
  const { language }: { language: string[] } = require('@/locales/config')
  const paths = language.map((locale) => ({
    params: { locale_slug: locale }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { locale_slug } = params!

  return {
    props: {
      locale: locale_slug
    }
  }
}

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Meta pageTitle={t('STRID_cmn_pagetitle').replace('{var}', t('TEMP_Top'))} />
      <PageTemplateWithHeader>TODO: implement code here</PageTemplateWithHeader>
    </>
  )
}
export default MainPage
