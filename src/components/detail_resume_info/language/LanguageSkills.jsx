import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const LanguageSkills = () => {
  return (
    <div>
        <Typography variant="h5" sx={{ color:'#429098', fontFamily:'Ubuntu', fontWeight:'900', textDecoration:'underline'  }}>
            LANGUAGES
        </Typography>
        
            <List sx={{ width: '100%' }} >
                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h6' sx={{ fontWeight:'600' }}>Amharic</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                                Native or Bilingual Proficiency
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary={
                          <>
                            <Typography variant='h6' sx={{ fontWeight:'600' }}>English</Typography>
                          </>
                        } 
                      
                        secondary={
                          <>
                            <Typography variant='body1' sx={{ color:'#429098', paddingBottom:'20px' }}>
                                Full Professional Profeciency
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                </List>
    </div>
  )
}

export default LanguageSkills