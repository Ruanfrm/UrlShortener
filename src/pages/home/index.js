import React, { useState } from 'react'
import {FiLink, FiInstagram, FiGithub} from "react-icons/fi"
import LinkItem from '../../components/LinkItem'
import Menu from '../../components/menu'
import "./home.css"
import axios from 'axios'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { saveLink } from '../../services/storeLinks';


export default function Home() {

  const [link, setLink] = useState('');
  const [showmodal, setShowModal ] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink(){

    const encodedParams = new URLSearchParams();
    encodedParams.append("url", link);

    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '11d4b658dbmsh23ed29c12108d29p18b16ajsn34c80446f10b',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      data: encodedParams
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
      saveLink('@encurtaLink', response.data)

      setData(response.data)

      setShowModal(true)
      setLink('')
      toast.success("Url encurtada")
    }).catch(function (error) {
      // console.error(error);
      toast.error( "Ocorreu algum problema")
   
    });


  }



  return (
    <div className='container-home'>
  
      <Menu/>
        
        <div className='logo'>
            <img src='/logo.png'/>
            <h1>Encurtador de Links</h1>
            <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className='area-input'>
            <div>
                <FiLink size={24} color="#fff"/>
                <input
                type="url"
                placeholder='Cole seu link aqui!'
                value={link}
                onChange={ (e) => setLink(e.target.value) }
                />
            </div>

                <button onClick={handleShortLink} >Encurtar Link</button>
        </div>

      {showmodal &&(
        <LinkItem
          closeModal={() => setShowModal(false) } 
          content={data}
          
        />
      )}

      


    </div>
  )
}
