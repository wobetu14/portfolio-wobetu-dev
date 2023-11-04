import {  Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import '../contacts/Contacts.css'
import LocationIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contacts() {
  return (
   <div>
       <Grid container spacing={2} className="contacts__container">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <EmailIcon />&nbsp;&nbsp;
                        <ListItemText primary={
                            <>
                                <Typography><a style={{ color:'white', textDecoration:'none' }} href='mailto:wobetushiferaw@gmail.com'>wobetushiferaw@gmail.com</a></Typography>
                            </>
                        } />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <LocationIcon />&nbsp;&nbsp;
                        <ListItemText primary="ADDIS ABABA, ETHIOPIA" />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <LinkedInIcon />&nbsp;&nbsp;
                        <ListItemText primary={
                            <>
                                <Typography>
                                    <a style={{ color:'white', textDecoration:'none' }} href='https://www.linkedin.com/in/wobetus' target='_blank' rel='noreferrer'>https://www.linkedin.com/in/wobetus</a>
                                </Typography>
                            </>
                        } />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <PhoneAndroidIcon />&nbsp;&nbsp;
                        <ListItemText primary={
                            <>
                                <Typography>
                                    <a style={{ color:'white', textDecoration:'none' }} href='Tel:+251920531610'>+251920531610</a>
                                </Typography>
                            </>
                        } />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <WhatsAppIcon />&nbsp;&nbsp;
                        <ListItemText primary={
                            <>
                                <Typography>
                                    <a style={{ color:'white', textDecoration:'none' }} href='https://wa.me/+251920531610' target='_blank' rel='noreferrer'>+251920531610</a>
                                </Typography>
                            </>
                        } />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <GitHubIcon />&nbsp;&nbsp;
                        <ListItemText primary={
                            <>
                                <Typography>
                                    <a style={{ color:'white', textDecoration:'none' }} href='https://github.com/wobetu14' target='_blank' rel='noreferrer'>https://github.com/wobetu14</a>
                                </Typography>
                            </>
                        } />
                    </ListItem>
                </List>
            </Grid>
       </Grid>
   </div>
  )
}

export default Contacts