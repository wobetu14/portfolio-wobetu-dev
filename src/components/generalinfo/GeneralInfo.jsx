import { Container, Typography } from '@mui/material'
import React from 'react'
import './GeneralInfo.css'

function GeneralInfo() {
  return (
   <Container maxWidth={true} className="main__container">
       <Typography variant='h2' className='full__name'>
           Wobetu Shiferaw
        </Typography>
       <Typography variant='h5' className='profession__title'>
            Backend | Frontend | FullStack Web Developer | UX Designer
       </Typography>

       <Typography variant='h5' className='profession__title'>
            IT Consultant
       </Typography>

       <Typography variant="body1" className='profession_description'>
          I am a Senior Software Engineer with 7+ years of experience in developing web applications for small businesses to enterprises. I am an
          expert in Core PHP, Laravel, MySQL/MariaDB databases, JavaScript, React, HTML5 and CSS3.
       </Typography>
   </Container>
  )
}

export default GeneralInfo