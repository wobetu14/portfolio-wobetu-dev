import {  Grid, List, ListItem, ListItemText } from '@mui/material'
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
            <Grid item xs={6}>
                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <EmailIcon />&nbsp;&nbsp;
                        <ListItemText primary="wobetushiferaw@gmail.com" />
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
                        <ListItemText primary="https://www.linkedin.com/in/wobetus" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <PhoneAndroidIcon />&nbsp;&nbsp;
                        <ListItemText primary="+251920531610" />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <WhatsAppIcon />&nbsp;&nbsp;
                        <ListItemText primary="+251920531610" />
                    </ListItem>
                </List>

                <List sx={{ width: '100%', maxWidth: 360 }} className="contact__list">
                    <ListItem>
                        <GitHubIcon />&nbsp;&nbsp;
                        <ListItemText primary="https://github.com/wobetu14" />
                    </ListItem>
                </List>
            </Grid>
       </Grid>
   </div>
  )
}

export default Contacts