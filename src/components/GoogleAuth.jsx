import React from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "703466946188-an6e5hf4m118r8tk4gv6i1pitrmfq8jv.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "any string you want",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }
  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          {" "}
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          {" "}
          <i className='google icon' />
          Sign in with Google
        </button>
      )
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth)