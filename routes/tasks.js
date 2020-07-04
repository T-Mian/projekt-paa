const router = require('koa-router')()
const store = require('../store')
const store = require('../store')
router.prefix('/tasks')
router.prefix('/tasks')
router.post('/add', async (ctx, next) => {
router.post('/add', async (ctx, next) => {
  await store.createTask(ctx.request.body.title)
  await store.createTask(ctx.request.body.title)
  ctx.redirect('/')
  ctx.redirect('/')
})
})
module.exports = router
module.exports = router
