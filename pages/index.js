import React from "react"

export default class Index extends React.Component {
  static getInitialProps = ({res}) => {
    res.redirect("/people")
  }
}
