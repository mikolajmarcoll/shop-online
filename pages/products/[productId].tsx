import { routes } from '@/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const router = useRouter()

  if (!router.isReady) return 'Loading ...'

  return (
    <>
      <Link href={routes.products.path}>Go back</Link>

      {router.query.productId}
    </>
  )
}

export default ProductPage
