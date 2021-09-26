import { useEffect, useRef, useState } from 'react'
import { fetchQuotes, searchQuotes } from '@/api/quoteApi'

const RequestCancellationApiLayer = (props) => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const searchAbortRef = useRef(null)

  const initFetchQuotes = async () => {
    const quotesData = await fetchQuotes()
    setData(quotesData)
  }

  const onQueryChange = async (e) => {
    const q = e.target.value
    setQuery(q)
    try {
      searchAbortRef.current?.()
      const response = await searchQuotes(q, {
        abort: (abort) => {
          searchAbortRef.current = abort
        },
      })
      setData(response)
    } catch (error) {
      if (error.aborted) {
        console.warn('REQUEST ABORTED!')
      } else {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    initFetchQuotes()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">
        Request Cancellation API Layer
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
        {data.map((quote) => {
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
        })}
      </div>
    </div>
  )
}

export default RequestCancellationApiLayer
