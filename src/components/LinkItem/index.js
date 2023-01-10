import React from 'react'
import "./link-item.css";
import {FiX, FiClipboard} from "react-icons/fi"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



export default function LinkItem({closeModal, content}) {
  
  async function copyLink() {
    await navigator.clipboard.writeText(content.result_url)
    toast.success("Url copiada com sucesso")
  }

  return (
    <div className='container'>
        <div className='modal-header'>
        <h2>Link encurtado:</h2>
        <button onClick={closeModal}>
            <FiX size={28} color="#000"/>
        </button>
        </div>
        <button className='modal-link' onClick={copyLink}>
            {content.result_url}
            <FiClipboard size={20} color="#fff"/>
        </button>


    </div>
  )
}
