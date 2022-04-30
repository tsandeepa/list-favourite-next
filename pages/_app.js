import Layout from '../components/layout'
import '../styles/globals.css'
import GlobalStyles from '../styles/styled/global.styled'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <GlobalStyles/>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
