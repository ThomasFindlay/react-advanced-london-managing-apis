import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from 'fastify'
import {
  getTopQuotes,
  searchQuotes
} from './quotesController'

function quotesRoutes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) {
  fastify.get('/top_quotes', getTopQuotes)
  fastify.get('/search', searchQuotes)
  done()
}

export default quotesRoutes
