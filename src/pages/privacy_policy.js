import React from 'react'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'

const PrivacyPolicy = React.memo(() => {
  return (
    <>
      <main className={`m-auto max-w-md bg-gray-100 text-gray-900`}>
        <Header />
        <Card>
          <h1 className='text-2xl font-bold'>プライバシーポリシー</h1>
          <Title
            title='当サイトに掲載されている広告について'
            className='mt-8'
          />
          <p className='mt-3 text-sm leading-relaxed'>
            当サイトでは、第三者配信の広告サービス（
            <a
              className='font-bold text-blue-600'
              href='https://www.google.com/adsense/start/#/?modal_active=none'
            >
              Googleアドセンス
            </a>
            ）を利用しています。
            <br />
            このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
            『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
            を使用することがあります。
            <br />
            またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
            <a
              className='font-bold text-blue-600'
              href='https://policies.google.com/technologies/ads?hl=ja'
            >
              こちら
            </a>
            をクリックしてください。
          </p>
          <Title
            title='当サイトが使用しているアクセス解析ツールについて'
            className='mt-8'
          />
          <p className='mt-3 text-sm leading-relaxed'>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            <br />
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            <br />
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            <br />
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            <br />
            この規約に関して、詳しくは
            <a
              className='font-bold text-blue-600'
              href='https://www.google.com/analytics/terms/jp.html'
            >
              こちら
            </a>
            、または
            <a
              className='font-bold text-blue-600'
              href='https://policies.google.com/technologies/partner-sites?hl=ja'
            >
              こちら
            </a>
            をクリックしてください。
          </p>
          <Title title='免責事項について' className='mt-8' />
          <p className='mt-3 text-sm leading-relaxed'>
            当サイトに掲載されている情報については、可能な限り正確な情報を提供するよう努めておりますが、誤情報が混入する場合や、情報の最新性が損なわれる場合もございます。また、情報の正確性を鑑みた際に、予告なしでの情報の変更・削除をすることもございますので、ご了承くださいませ。
          </p>
          <p className='mt-3 text-sm leading-relaxed'>
            また、当サイトの掲載情報をご利用頂く場合には、お客様のご判断と責任におきましてご利用頂けますようお願い致します。当サイトを利用した、何らかのトラブルや損害、損失等につきましては、当サイトでは、一切の責任を負いかねます事ご了承願います。
          </p>
          <Title title='著作権・肖像権について' className='mt-8' />
          <p className='mt-3 text-sm leading-relaxed'>
            当サイトに記載されてある文章・画像については、著作権法で定められている引用の範囲を超えて、無断で転用・使用することを禁じます。引用をする際は、「引用元の明示」をお守りください。
          </p>
          <Title title='リンクについて' className='mt-8' />
          <p className='mt-3 text-sm leading-relaxed'>
            当サイトは、基本的にリンクフリーです。リンクを張る際の許可などは、不要になります。
          </p>
          <p className='mt-3 text-sm leading-relaxed'>
            記事の引用などを行う際は、引用元としての記載をお願い致します。
          </p>
          <p className='mt-3 text-sm leading-relaxed'>
            初出掲載：2022年12月15日
          </p>
        </Card>
      </main>
      <Footer />
    </>
  )
})

export default PrivacyPolicy
