import setPathParams from "../setPathParams"
import { Router } from "lib/routes"

jest.mock("../routes", () => {
  return {
    Router: {
      replaceRoute: jest.fn()
    }
  }
})

describe("setPathParams", () => {
  it("sets the param on empty state", () => {
    const newPath = setPathParams(
      { foo: "bar" },
      { path: "/resource", params: {} }
    )
    expect(newPath).toEqual("/resource?foo=bar")
    expect(Router.replaceRoute).toHaveBeenCalledWith(
      newPath,
      { foo: "bar" },
      { shallow: true }
    )
  })

  it("does not add param with empty value", () => {
    const newPath = setPathParams(
      { foo: "" },
      { path: "/resource", params: {} }
    )
    expect(newPath).toEqual("/resource")
    expect(Router.replaceRoute).toHaveBeenCalledWith(
      newPath,
      { foo: "" },
      { shallow: true }
    )
  })

  it("does not add non query URL parameters to path", () => {
    const newPath = setPathParams(
      { foo: "tar" },
      { path: "/resource", params: { foo: "bar" } }
    )
    expect(newPath).toEqual("/resource")
    expect(Router.replaceRoute).toHaveBeenCalledWith(
      newPath,
      { foo: "tar" },
      { shallow: true }
    )
  })

  it("merges the param with existing state", () => {
    const newPath = setPathParams(
      { foo: "bar", zoo: "loo" },
      { path: "/resource?zoo=loo", params: { zoo: "loo" } }
    )
    expect(newPath).toEqual("/resource?foo=bar&zoo=loo")
    expect(Router.replaceRoute).toHaveBeenCalledWith(
      newPath,
      { foo: "bar", zoo: "loo" },
      { shallow: true }
    )
  })
})
