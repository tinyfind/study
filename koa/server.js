const koa = require("koa");
const KoaRouter = require("koa-router");
const { koaBody } = require("koa-body");

const app = new koa();
const router = new KoaRouter();

app.use(
  koaBody({
    multer: true,
  })
);

router.post("/api", (ctx, next) => {
  console.log(ctx)
  ctx.body = ctx.request.body;
});

// app.use((ctx, next) => {
//   // console.log(ctx.query);
//   ctx.set({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//     "Access-Control-Allow-Headers": "Content-Type",
//   });
//   ctx.body = "hello world";
//   next();
// });

app.use(router.routes());

app.listen(3000);
