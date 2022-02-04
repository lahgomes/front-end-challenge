import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '../../components/Hero'

import * as S from './styles'

const MovieLayout = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>
    </div>
  )
}

export default MovieLayout
