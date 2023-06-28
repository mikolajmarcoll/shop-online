import { ReactNode } from 'react'

import { Colors } from '@/colors'

import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={`flex flex-col bg-${Colors.teal} min-h-screen`}>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
)
