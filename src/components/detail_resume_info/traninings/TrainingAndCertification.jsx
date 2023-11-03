import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const TrainingAndCertification = () => {
  return (
    <div>
        <Typography variant="h5" sx={{ color:'#429098', fontFamily:'Ubuntu', fontWeight:'900', textDecoration:'underline'  }}>
            TRAININGS AND CERTIFICATIONS
        </Typography>
        
            <List sx={{ width: '100%' }} >
                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>IBM Cloud Application Developer</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>IBM and Ministry of Science &amp; Heigher Education - Ethiopia</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Sept 2019
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098' }}>Topics</Typography>
                            <ul>
                                <li>Fundamenta Concepts of Cloud Computing</li>
                            </ul>
                          </>
                        }
                      />
                    </ListItem>
                    </List>
    </div>
  )
}

export default TrainingAndCertification