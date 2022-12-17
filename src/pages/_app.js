import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import '@/styles/globals.scss'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WV975LR' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
