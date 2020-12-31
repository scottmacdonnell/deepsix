import Head from 'next/head'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import ShopItems from '../components/ShopItems'

export default function Shop() {
  return (
    <div className="Shop">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario."/>
        <title>Shop - deepsix</title>
      </Head>
      
      <div className="Page">
        <header>
          <Header 
            page="Shop"
          />
        </header>

        <main>
          <div className="Content">
            <ShopItems />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}