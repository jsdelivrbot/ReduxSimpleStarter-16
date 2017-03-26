

export function signinUser({ email, password }) {
  //redux thunk gives us access to dispatch
  return function(dispatch) {

    // Submit email/password to the server

    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT Token
    // - redirect to the route '/feature'

    // If request is bad...
    // - Show an error to the user

  }
}
