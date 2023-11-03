import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <Typography variant="h5" sx={{ 
            color:'#429098', 
            fontFamily:'Ubuntu', 
            fontWeight:'900', 
            textDecoration:'underline',
            paddingTop:'20px'  }}>
            PROJECTS
        </Typography>
        <List sx={{ width: '100%' }} >
        <ListItem>
                <ListItemText 
                secondary={
                    <>
                        <Typography variant='h6'>E-Consultation Portal</Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Organization: German International Cooperation (GIZ)
                        </Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Feb 2023 - Aug 2023
                        </Typography>

                        <Typography variant='body1'>
                            <ul>
                                <li>The platform aims to automate the drafting process of laws and regulations in the country (Ethiopia), 
                                    and hence to enhance public participation, inclusiveness, tranceparency and improve the ease of doing business.
                                </li>
                                <li>The project is developed with Laravel and React</li>
                                <li>I was responsible for the development of the frontend part of the application</li>
                                <li>Project URL: <a href='https://e-consultation.gov.et/' target='_blank' rel='noreferrer'>https://e-consultation.gov.et/</a></li>
                            </ul>
                        </Typography>
                    </>
                }
                />
            </ListItem>

            <ListItem>
                <ListItemText 
                secondary={
                    <>
                        <Typography variant='h6'>Intranet Portal for Ministry of Innovation and Technology</Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Feb 2022 - May 2022
                        </Typography>

                        <Typography variant='body1'>
                            <ul>
                                <li>The project is named as Digital MInT and Designed to serve as an
                                    internal communication portal for employees and guests.
                                </li>
                                <li>It is developed with Laravel and React</li>
                                <li>Project URL: <a href='http://dmint.gov.et/' target='_blank' rel='noreferrer'>http://dmint.gov.et/</a></li>
                            </ul>
                        </Typography>
                    </>
                }
                />
            </ListItem>

            <ListItem>
                <ListItemText 
                secondary={
                    <>
                        <Typography variant='h6'>30 Days of React Capstone Project</Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Dec. 2022 - Feb. 2023
                        </Typography>

                        <Typography variant='body1'>
                            <ul>
                                <li>Capstone project for a "30DaysOfReact Tutorial" provided by <a href='https://www.linkedin.com/in/asabeneh/' target='_blank' rel='noreferrer'>Asabeneh Shitahun.</a>
                                </li>
                                <li>It is developed with Laravel and React</li>
                                <li>Project URL: <a href='https://30daysreact.wobetu.com/' target='_blank' rel='noreferrer'>https://30daysreact.wobetu.com/</a></li>
                            </ul>
                        </Typography>
                    </>
                }
                />
            </ListItem>

            <ListItem>
                <ListItemText 
                secondary={
                    <>
                        <Typography variant='h6'>Covid-19 Tracker App in React JS</Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Dec. 2022
                        </Typography>

                        <Typography variant='body1'>
                            <ul>
                                <li>A covid 19 tracker built as portfolio project while I study React as a self-taught developer</li>
                                <li>Project URL: <a href='https://covid19.wobetu.com/' target='_blank' rel='noreferrer'>https://covid19.wobetu.com/</a></li>
                            </ul>
                        </Typography>
                    </>
                }
                />
            </ListItem>

            <ListItem>
                <ListItemText 
                secondary={
                    <>
                        <Typography variant='h6'>Student Record Management System</Typography>
                        <Typography variant='body1' sx={{ paddingBottom:'20px' }}>
                            Organization: Debre Markos University
                        </Typography>
                        <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                            Apr 2016 - Aug. 2017
                        </Typography>

                        <Typography variant='body1'>
                            <ul>
                                <li>
                                    Participated in the development of Student Record Management
                                    System for Debre Markos University - Student Admission office. I
                                    have participated in developing modules such as student bio-data
                                    management, user management, course and curriculum
                                    management, Grading management and enrollment management.
                                </li>
                                <li>We have used Laravel, Bootstrap and JQuery to develop the system.</li>
                            </ul>
                        </Typography>
                    </>
                }
                />
            </ListItem>
        </List>
    </div>
  )
}

export default Projects