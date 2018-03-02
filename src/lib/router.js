import { Router as NextRouter } from "lib/routes"

export default function Router({ returnTo }) {
  return {
    goToPeople() {
      return NextRouter.pushRoute("people")
    },
    goBack(orCallThis) {
      if (returnTo) {
        return () => NextRouter.pushRoute(returnTo)
      } else {
        return orCallThis
      }
    }
  }
}
