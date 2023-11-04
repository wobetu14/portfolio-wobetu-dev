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
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>Google UX Design Professional Ceritificate (5 courses out of 7)</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Coursera</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Nov 13, 2022
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098' }}>Courses</Typography>
                            <ul>
                              <li>
                               <a href='https://coursera.org/share/a0b246a8db06e060952fce32d2ddfdaa' target='_blank' rel='noreferrer'>Foundations of User Experience (UX) Design </a>
                              </li>
                              <li>
                                <a href='https://coursera.org/share/4ec5dc49838beac7118a6f11524de55f' target='_blank' rel='noreferrer'>Start the UX Design Process: Empathize, Define, and Ideate</a>
                              </li>
                              <li>
                                <a href='https://coursera.org/share/1b8550c4aa7d94e3f2e9ed8706653210' target='_blank' rel='noreferrer'>Build Wireframes and Low-Fidelity Prototypes</a>
                              </li>
                              <li>
                                <a href='https://coursera.org/share/242d24a7404f8d5609daa1d57ab11c5a' target='_blank' rel='noreferrer'>Conduct UX Research and Test Early Concepts</a>
                              </li>
                              <li>
                                <a href='https://coursera.org/share/bfe7e8cee742e492cd756f0c06a7233b' target='_blank' rel='noreferrer'>Create High-Fidelity Designs and Prototypes in Figma</a>
                              </li>
                            </ul>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>Agile Software Development</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Coursera</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              June 13, 2022
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Certificate URL: <a 
                              href='https://coursera.org/share/ec64be209173db969682379081b24c72'
                              target='_blank' rel='noreferrer'
                              >https://coursera.org/share/ec64be209173db969682379081b24c72</a>
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>30 Days of React JS Training with Asabeneh Yitayih</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Personal Bootcamp</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              March 2022
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Course URL: <a 
                              href='https://github.com/Asabeneh/30-Days-Of-React.git'
                              target='_blank' rel='noreferrer'
                              >https://github.com/Asabeneh/30-Days-Of-React.git</a>
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>The Complete React Developer Course</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Udemy</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              June 2021
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Course URL: <a 
                              href='https://www.udemy.com/course/react-2nd-edition/'
                              target='_blank' rel='noreferrer'
                              >https://www.udemy.com/course/react-2nd-edition/</a>
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
            </List>
    </div>
  )
}

export default TrainingAndCertification