import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Education() {
  return (
    <div>
        <Typography variant="h5" sx={{ color:'#429098', fontFamily:'Ubuntu', fontWeight:'900', textDecoration:'underline'  }}>
            EDUCATION
        </Typography>
        
            <List sx={{ width: '100%' }} >
                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>BSc. Information Communication Technology</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Wollo University</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Jan 2008 - July 2010
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098' }}>Courses</Typography>
                            <ul>
                                <li>Programming Fundamentals with C++</li>
                                <li>Object-Oriented Programming with C++</li>
                                <li>Web Design and Internet Technologies (HTML, CSS, JavaScript, PHP)</li>
                                <li>Data Structure and Algorithms</li>
                                <li>Advanced Programming with Java</li>
                                <li>Structured System Analysis and Design</li>
                                <li>Object-Oriented Systems Analysis and Design</li>
                                <li>Fundamental Database Management Systems</li>
                                <li>Advanced Database Management Systems</li>
                                <li>Data Communication and Computer Networking</li>
                                <li>Enterprise Network Management</li>
                            </ul>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h5' sx={{ fontWeight:'600' }}>MSc. Software Engineering</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='h6'>Adama Science and Technology University</Typography>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                              Sept. 2013 - Oct. 2015
                            </Typography>

                            <Typography variant='body1' sx={{ color:'#429098' }}>Courses</Typography>
                            <ul>
                                <li>Software Requirements Engineering</li>
                                <li>Selected Topics in Software Engineering</li>
                                <li>Software Design and Architecture</li>
                                <li>Software Testing Methodologies</li>
                                <li>Software Project Management</li>
                                <li>Software Quality Assurance</li>
                                <li>Advanced Operating Systems</li>
                                <li>Advanced Computer Networks</li>
                                <li>Data Mining and Data Warehousing</li>
                                <li>Cloud Computing</li>
                            </ul>
                          </>
                        }
                      />
                    </ListItem>
                </List>
    </div>
  )
}

export default Education