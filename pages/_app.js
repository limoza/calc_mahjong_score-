import { RecoilRoot } from 'recoil'
import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
