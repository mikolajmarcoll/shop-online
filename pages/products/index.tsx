'use client'

import { InferGetStaticPropsType } from 'next'

import { Layout } from '../../components/Layout'
import { ProductDetails } from '../../components/Product'

interface Rating {
  rate: number
  count: number
}

enum Category {
  Electronics = 'electronics',
  Jewelry = 'jewelry',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

interface StoreApiResponse {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {data.map(({ id, title, image }) => (
        <li key={`${id}-${title}`} className='shadow-xl border-2'>
          <ProductDetails
            data={{
              title,
              image: {
                url: image,
                alt: title,
              },
            }}
          />
        </li>
      ))}
    </ul>
  </Layout>
)

export default ProductsPage

// Server static generation
export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data: StoreApiResponse[] = await res.json()

  return {
    props: {
      data,
    },
  }
}
