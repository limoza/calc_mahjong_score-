import { RecoilRoot } from 'recoil'
import '@/styles/globals.scss'
import { GA } from '@/components/ga'

import usePageView from '@/hooks/usePageView'

function MyApp({ Component, pageProps }) {
  usePageView()

  return (
    <RecoilRoot>
      <GA />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
