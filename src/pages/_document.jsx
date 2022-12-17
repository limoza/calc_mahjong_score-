import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import { GA } from '@/components/ga'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head prefix='og: http://ogp.me/ns#'>
          <title>
            【役解説付き】かんたんに麻雀の点数計算ができる無料サイト【かんたん麻雀点数計算】
          </title>
          <meta name='robots' content='noindex, nofollow' />
          <meta
            name='description'
            content='【充実の役解説付き】誰でも”かんたん”に麻雀の点数計算ができる！上がった役を一覧から選ぶだけ！親、子それぞれの点数が簡単に分かる！ご利用は完全無料！画像付きで充実の役解説も！'
          />
          <meta
            name='keywords'
            content='麻雀,麻雀 点数計算,マージャン 点数計算,麻雀 点数計算 簡単,マージャン 点数計算 簡単,麻雀 点数計算 簡単 サイト,マージャン 点数計算 簡単 サイト,麻雀 役解説,マージャン 役解説'
          />
          <meta
            property='og:title'
            content='【役解説付き】かんたんに麻雀の点数計算ができる無料サイト【かんたん麻雀点数計算】'
          />
          <meta
            property='og:description'
            content='【充実の役解説付き】誰でも”かんたん”に麻雀の点数計算ができる！上がった役を一覧から選ぶだけ！親、子それぞれの点数が簡単に分かる！ご利用は完全無料！画像付きで充実の役解説も！'
          />
          <meta property='og:url' content='https://mascor.jp/' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://mascor.jp/ogp.png' />
          <meta property='og:site_name' content='かんたん麻雀点数計算' />
          <meta property='og:locale' content='ja_JP' />
          <link href='https://mascor.jp/' rel='canonical' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/manifest.json' />
          <meta name='theme-color' content='#ffffff' />
          {/* <GA /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
