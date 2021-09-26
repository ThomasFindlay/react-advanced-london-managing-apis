import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import DisplayUsers from '@/components/DisplayUsers.jsx'
import UseApiStatus from '@/components/UseApiStatus'
import BooleanFlag from '@/components/BooleanFlag'
import UseApi from '@/components/UseApi'
import RequestCancellationPureAxios from '@/components/RequestCancellationPureAxios'
import RequestCancellationApiLayer from './components/RequestCancellationApiLayer'
import RequestCancellationApiLayerWithReactQuery from './components/RequestCancellationApiLayerWithReactQuery'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="font-bold text-3xl mb-8">
          Advanced Patterns for API Management in Large-Scale React Applications
        </h1>
        <span>
          <a
            className="hover:underline text-blue-900"
            href="https://twitter.com/thomasfindlay94"
            target="_blank"
            rel="noreferrer"
          >
            By Thomas Findlay
          </a>
        </span>
        <DisplayUsers />
        <BooleanFlag />
        <UseApiStatus />
        <UseApi />
        <RequestCancellationPureAxios />
        <RequestCancellationApiLayer />
        <RequestCancellationApiLayerWithReactQuery />
      </div>
    </QueryClientProvider>
  )
}

export default App
