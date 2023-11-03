import { Email } from '@mui/icons-material'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

function WorkExperience() {
  return (
    <div>
        <Typography variant="h5" sx={{ color:'#429098', fontFamily:'Ubuntu', fontWeight:'900', textDecoration:'underline'  }}>
            WORK EXPERIENCE
        </Typography>
        
            <List sx={{ width: '100%' }} >
                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>Lecturer</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Debre Markos University</Typography>
                            <Typography variant='body1' sx={{ color:'#429098' }}>
                              Sept 2012 - June 2020
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>Digital Literacy Project Manager</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Ministry of Innovation and Technology</Typography>
                            <Typography variant='body1' sx={{ color:'#429098' }}>
                              June 2020 - June 2023
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>Frontend Developer</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>GIZ Ethiopia and Djibouti</Typography>
                            <Typography variant='body1' sx={{ color:'#429098' }}>
                              Feb 2023 - Present
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>


                </List>
    </div>
  )
}

export default WorkExperience