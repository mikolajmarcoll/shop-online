import { routes } from '@/routes'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from './Rating'

interface ProductDetails {
  id: number
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  rating: number
}

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'image'>

interface ProductProps {
  data: ProductDetails
}

interface ProductDetailsProps {
  data: ProductListItem
}

export const ProductDetails = ({
  data: { id, image, title },
}: ProductDetailsProps) => (
  <>
    <Image
      src={image.url}
      alt={image.alt}
      width={500}
      height={500}
      quality={80}
      loading='lazy'
    />
    <Link href={routes.product.path.replace(':id', id.toString())}>
      <h2 className='p-4 text-3xl font-bold'>{title}</h2>
    </Link>
  </>
)
