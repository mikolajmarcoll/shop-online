import { Rating } from './Rating'

interface ProductDetails {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  rating: number
}

type ProductListItem = Pick<ProductDetails, 'title' | 'image'>

interface ProductProps {
  data: ProductDetails
}

interface ProductDetailsProps {
  data: ProductListItem
}

export const ProductDetails = ({
  data: { image, title },
}: ProductDetailsProps) => (
  <>
    <img src={image.url} alt={image.alt} />
    <h2 className='p-4 text-3xl font-bold'>{title}</h2>
  </>
)
