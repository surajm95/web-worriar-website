import React from "react"


import { useAuth0 } from "@auth0/auth0-react"

import { withAuthenticationRequired } from "@auth0/auth0-react"
import LogoutButton from "../components/LogoutButton"
import Navbar from "../components/Navbar"

const Account = () => {
  /* 👇 Access user from the useAuth0 hook 👇 */
  const { user } = useAuth0()
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <p>Email: {user.email}</p>
        <LogoutButton />
      </div>
    </div>
  )
}

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(Account)
