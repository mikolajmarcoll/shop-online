import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

const client = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={client}>
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default App
