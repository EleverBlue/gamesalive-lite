import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GamesAlive Lite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to GamesAlive Lite!" />
        <p className="description">
          Get started by going to
           <code>
                <a href="pages/games">
            Games
                </a>
           </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
Footer
