import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

const client = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </QueryClientProvider>
)

export default App
