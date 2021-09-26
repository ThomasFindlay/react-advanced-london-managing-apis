import { useState } from 'react'
import { searchQuotes } from '@/api/quoteApi'
import { useQuery } from 'react-query'

const RequestCancellationApiLayerWithReactQuery = (props) => {
  const [query, setQuery] = useState('')
  const { data, isLoading, isSuccess, isError } = useQuery(
    ['quotes', query],
    () => {
      let cancel
      const promise = searchQuotes(query, {
        abort: (abort) => (cancel = abort),
      })
      promise.catch((error) => {
        if (error.aborted) {
          console.warn('REQUEST ABORTED!')
        }
        throw error
      })
      promise.cancel = cancel
      return promise
    },
    {
      initialData: [],
    }
  )

  const onQueryChange = async (e) => {
    const q = e.target.value
    setQuery(q)
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">
        Request Cancellation API Layer with React Query
      </h2>
      <div>
        <form className="mb-8 flex flex-col items-start">
          <label className="mb-4">Find quotes</label>
          <input
            className="px-4 py-3 border w-full"
            type="text"
            value={query}
            onChange={onQueryChange}
          />
        </form>
        {isLoading ? <p>Fetching quotes</p> : null}
        {isError ? <p>There was a problem</p> : null}
        {isSuccess
          ? data.map((quote) => {
              return (
                <blockquote
                  key={quote.id}
                  className="relative p-4 text-xl italic border-l-4"
                >
                  <p className="mb-4">"{quote.quote}"</p>
                  <cite className="flex items-center justify-center">
                    <div className="flex flex-col items-start">
                      <span className="mb-1 text-sm italic font-bold">
                        {quote.author}
                      </span>
                    </div>
                  </cite>
                </blockquote>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default RequestCancellationApiLayerWithReactQuery
