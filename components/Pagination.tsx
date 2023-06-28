import { useMemo } from 'react'

export const Pagination = ({
  page,
  changePage,
}: {
  page: number
  changePage: (value: number) => void
}) => {
  const inactivePage =
    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
  const activePage =
    'border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'

  const pages = useMemo(() => {
    if (page === 1 || page === 2 || page === 9 || page === 10) {
      return [1, 2, 3, '...', 8, 9, 10]
    }

    const current = [page - 1, page, page + 1]

    return ['...', ...current, '...']
  }, [page])

  return (
    <nav className='border-t border-gray-200 px-4 flex items-center justify-between sm:px-0'>
      <div className='hidden md:-mt-px md:flex'>
        {pages.map((p) => (
          <p
            onClick={() => {
              console.log({ type: typeof p, p })
              if (typeof p === 'number') changePage(p)
            }}
            className={page === p ? activePage : inactivePage}
            key={`pagination-page-${p}`}
          >
            {p}
          </p>
        ))}
      </div>
    </nav>
  )
}
