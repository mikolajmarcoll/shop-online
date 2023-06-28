export interface ProductProps {
  id: string
  title: string
  price: number
  description: string
  category: string
  rating: Rating
  image: string
  longDescription: string
}

interface Rating {
  rate: number
  count: number
}

export const Product = ({
  //   id,
  //   category,
  //   rating,
  //   image,
  //   longDescription,
  title,
  price,
  description,
}: ProductProps) => {
  return (
    <div className='flex'>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  )
}
