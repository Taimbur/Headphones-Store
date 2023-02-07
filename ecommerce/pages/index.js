import product from '@/sanity_ecommerce/schemas/product'
import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, navbar, Layout, Herobanner, Cart, Navbar, Footer }
  from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <div>
        <Herobanner Herobanner={bannerData.length && bannerData[1]} />


        <div className='products-heading'>

          <h2>Best Selling Products</h2>
          <p>speakers of many variations</p>
          <h1>hello </h1>
        </div>
        
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }

  }

}
export default Home;
