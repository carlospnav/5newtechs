if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const next = require("next")
const routes = require("./src/lib/routes")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const appHandler = app.getRequestHandler()
const routesHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.get("/", (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params)

    return app.render(req, res, "/", mergedQuery)
  })

  server.use(routesHandler)

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get("*", (req, res) => {
    return appHandler(req, res)
  })

  const port = process.env.PORT || 4000
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port}...`)
  })
})
