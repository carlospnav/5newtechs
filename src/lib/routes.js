const routes = (module.exports = require("next-routes")())

routes.add("people").add("person_detail", "/people/:personId").add("movies", "/movies/:filmId")
