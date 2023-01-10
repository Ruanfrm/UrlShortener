import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";

export default function Error() {
  return (
    <div className='container-error'>
        <img src='http://almureed.ae/assets/website/images/404.gif'/>
        <h3>Pagina não encontrada</h3>
        <Link to='/' className='buttonError'>Voltar para home</Link>
    </div>
  )
}
