import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from 'fastify'

function quotesRoutes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) {
  fastify.get('/:id', async (request, reply) => {
    return {
      user: {
        id: 2,
        name: 'Zoe'
      }
    }
  })

  fastify.get('/', async (request, reply) => {
    return {
      users: [
        {
          id: 1,
          name: 'Joe'
        },
        {
          id: 2,
          name: 'Zoe'
        },
        {
          id: 3,
          name: 'Jake'
        },
        {
          id: 4,
          name: 'Bella'
        }
      ]
    }
  })

  done()
}

export default quotesRoutes
