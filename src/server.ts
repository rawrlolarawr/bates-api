import Koa from 'koa'
import Router from 'koa-router'

import logger from 'koa-logger'
import json from 'koa-json'

const server = new Koa()
const router = new Router()

router.get('/', async(ctx, next) => {
    ctx.body = { msg: "Bates API" }

    await next()
})

server.use(json())
server.use(logger())

server.use(router.routes()).use(router.allowedMethods())

server.listen(3001, () => {
    console.log('Koa active')
})