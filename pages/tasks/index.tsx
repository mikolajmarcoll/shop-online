import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import { Product, ProductProps } from './product'

const endpoint = 'https://naszsklep-api.vercel.app/api/products'
const PRODUCTS_ON_PAGE = 25

const getProducts = async (page: number) => {
  const url = `${endpoint}?take=${PRODUCTS_ON_PAGE}&offset=${
    PRODUCTS_ON_PAGE * (page - 1)
  }`
  console.log({ url })
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const PaginationPage = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
  })

  console.log({ page, data })

  if (isLoading) return 'Loading ...'
  if (!data || error) return 'Error'

  return (
    <>
      <div className='m-10'>
        {data?.map((product: ProductProps) => (
          <Product key={`${product.id}-product-item`} {...product} />
        ))}
        <Pagination page={page} changePage={(value) => setPage(value)} />
      </div>
    </>
  )
}

export default PaginationPage
