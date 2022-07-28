import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import LoginButton from "../components/LoginButton";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to = "/account">My Account </Link>
        
         <button> <LoginButton /></button> 
      </div>
    </nav>
  )
}