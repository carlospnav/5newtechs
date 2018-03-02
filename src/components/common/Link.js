import { connect } from "react-redux"
import { compose } from "recompose"
import { Link as RoutesLink } from "lib/routes"

function Link({
  children,
  route,
  dispatch,
  returnToCurrentPath,
  path,
  passHref = true,
  ...props
}) {
  const params = props
  if (returnToCurrentPath) {
    params.returnTo = path
  }
  return (
    <RoutesLink
      route={route}
      params={params}
      prefetch={process.env.USE_PREFETCH}
      passHref={passHref}
    >
      {children}
    </RoutesLink>
  )
}

export default compose(connect(({ url: { path } }) => ({ path })))(Link)
