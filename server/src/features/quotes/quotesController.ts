import { FastifyReply, FastifyRequest } from 'fastify'
import { nanoid } from 'nanoid'
import quotesOriginal from './quotesOriginal.json'
import quotes from './quotes.json'
import fs from 'fs/promises'
import path from 'path'
const quotesFilePath = path.resolve(__dirname, './quotes.json')

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time))

const readQuotes = async () => {
  const quotesBuffer = await fs.readFile(quotesFilePath)
  return JSON.parse(quotesBuffer.toString())
}

type QuotesData = {
  quotes: Array<{
    id: string
    quote: string
    author: string
  }>
}

export const getTopQuotes = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  await sleep()
  const quotesData = await readQuotes()
  return {
    quotes: quotesData.quotes.slice(0, 5),
  }
}

type SearchQuotes = {
  Querystring: {
    query?: string
  }
}

export const searchQuotes = async (request: FastifyRequest<SearchQuotes>, reply: FastifyReply) => {
  await sleep()
  const quotesData = await readQuotes() as QuotesData
  const query = request.query.query?.toLowerCase()

  if (!query) {
    return {
      quotes: quotesData.quotes.slice(0, 5),
    } 
  }

  return {
    quotes: quotesData.quotes.filter(({quote}) => {
      return quote.toLowerCase().includes(query)
    }).slice(0, 5)
  }

}