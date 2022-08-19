import React from 'react';
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {AiFillCopyrightCircle} from 'react-icons/ai'
export default function Footer(){
    return (
        <div className='footer-container' id='contact'>
            <h1>Contact Me</h1>
            <div className='footer-links-container'>
                <a href='https://github.com/ImYosrii' target='_blank'>{<BsGithub />}</a>
                <a href='https://www.linkedin.com/in/yosri-swidan-698267229/' target='_blank' >{<BsLinkedin />}</a>
                <a href='https://api.whatsapp.com/send?phone=17806040522' target='_blank' >{<BsWhatsapp />}</a>
                <a href='https://www.instagram.com/imyosri76/' target='_blank' >{<BsInstagram />}</a>
                <a href='mailto:yosrisaed99@gmail.com' target='_blank' >{<MdOutlineMail />}</a>
                <a href='https://imyosrii.github.io/' target='_blank' style={{color:'rgb(210, 2, 2)'}} >Y.S</a>
            </div>
            <p style={{marginTop: '3em', color:'gray'}}><AiFillCopyrightCircle />2022 Yosri Swidan</p>
        </div>
    )
}