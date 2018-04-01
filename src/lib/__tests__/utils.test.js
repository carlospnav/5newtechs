import { createFullEpisodeTitle, romanizeEpisodeNum, flexGroup, media } from "theme/utils"

describe("createFullEpisodeTitle", () => {

  it("should properly return the full title if provided with correct episode and title values", () => {
    expect(createFullEpisodeTitle("3", "A New Hope")).toEqual("Star Wars: Episode III: A New Hope")
  })

  it("should properly return a half title if provided with only a title", () => {
    expect(createFullEpisodeTitle(undefined, "The Last Jedi")).toEqual("Star Wars:: The Last Jedi")
  })

  it("should return an error message if episode isn't a proper number. ", () => {
    expect(createFullEpisodeTitle("Han", "The Last Jedi")).toEqual("Oops. Could not create the title with the information provided. It's a trap!")
  })
})

describe("romanizeEpisodeNum", () => {
  it("should convert the number 2 into II.", () => {
    expect(romanizeEpisodeNum(2)).toEqual("II")
  })

  it("should convert the number 4 into IV.", () => {
    expect(romanizeEpisodeNum(4)).toEqual("IV")
  })

  it("should convert the number 19 into IX.", () => {
    expect(romanizeEpisodeNum(19)).toEqual("XIX")
  })

  it("should return an error message if number provided is not a number.", () => {
    expect(romanizeEpisodeNum("Han")).toEqual("Num could not be romanized. Are you sure num is a number?")
  })
})

describe("flexGroup", () => {
  it("should return a proper row flex item template string", () => {
    expect(flexGroup(null, "space-between", "center")).toMatchSnapshot()
  })

  it("should return a proper column flex item template string.", () => {
    expect(flexGroup("column", "center")).toMatchSnapshot()
  })
})

describe("media", () => {
  it("should return a proper template string with the extra CSS rules provided", () => {
    expect(media.desktop`
      height: 200px;
      width: 100px;`
    ).toMatchSnapshot()
  })

  it("should return a proper template string with the extra CSS rules provided", () => {
    expect(media.desktop`
      height: 290px;
      width: 170px;
      background: #FFFFFF`
    ).toMatchSnapshot()
  })
})

