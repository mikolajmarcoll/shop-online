interface RatingProps {
  value: number
}

export const Rating = ({ value }: RatingProps) => (
  <span className='text-blue-500 font-bold'>{value}</span>
)
