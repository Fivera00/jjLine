import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'
import Footer from '../../components/footer'

import History from '../../components/account/history'
import DefaultPage from '../../components/defaultPage'

const Account = () => {

    const router = useRouter();
    const { acid } = router.query;
    try {
        // sube el scroll automaticamente :D
        document.documentElement.scrollTop = 0;
    } catch (error) {
        console.log(error)
    }

    return (
        <Container>
            <Head>
                <title>Historial</title>
            </Head>

            <div className="account">
                {acid === "history"
                    ? <History />
                    : <DefaultPage />
                }

            </div>
            <Footer />
        </Container>
    )
}

export default Account