import React from 'react'
import { Link } from 'react-router-dom'
import {FiInstagram, FiGithub} from "react-icons/fi"

import "./menu.css"

export default function Menu() {
  return (
    <div className='header'>
    <a href="https://github.com/Ruanfrm" target="_blank"> <FiGithub size={25} color="#fff"/></a>
     
      <a href='https://instagram.com/ruan.fr' target="_blank"><FiInstagram size={25} color="#fff"/></a>
      <Link to="/links">
      <button className='btn-header'>Meus LInks</button>
      </Link>
    </div>

  )
}
   