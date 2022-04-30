import Layout from '../components/layout'
import '../styles/globals.css'
import GlobalStyles from '../styles/styled/global.styled'
import { motion } from 'framer-motion';


function MyApp({ Component, pageProps, router }) {

  const pageTransitions = {
    pageInitial:{
      opacity: 0,
    },
    pageAnimate:{
      opacity: 1,
    }
  }

  return(
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageTransitions}>
      <Layout>
        <GlobalStyles/>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  ) 
}

export default MyApp
