import { ReactNode } from 'react'

import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { Colors } from '../colors'

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
