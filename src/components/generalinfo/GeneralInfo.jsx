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
            Backend | Frontend | Fullstack Developer | UX Designer
       </Typography>

       <Typography variant='h5' className='profession__title'>
            IT Consultant
       </Typography>
   </Container>
  )
}

export default GeneralInfo