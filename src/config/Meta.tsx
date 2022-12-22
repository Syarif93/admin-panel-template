import Head from 'next/head'
import { FC } from 'react'

type MetaProps = {
  title?: string
  description?: string
  keywords?: string
}

const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{`${title} - mytemplate.id`}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Beranda',
  keywords: 'Admin panel template',
  description: 'Admin panel template'
}

export default Meta