import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => (
  <main className='flex-grow p-4 bg-slate-700'>{children}</main>
)
