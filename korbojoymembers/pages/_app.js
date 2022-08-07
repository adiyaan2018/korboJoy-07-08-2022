import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import Layout from "../component/Layout";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { asPath, pathname } = useRouter();
  ;
  return (

    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>

  )
}
