import { Chip, Typography } from '@mui/material'
import React from 'react'

function Skills() {
  return (
    <div>
        <Typography variant="h5" sx={{ color:'#429098', fontFamily:'Ubuntu', fontWeight:'900', textDecoration:'underline'  }}>
            SKILLS
        </Typography>

        <Typography variant='h5'>
            <Chip label="HTML" sx={{ marginRight:'5px' }} />
            <Chip label="CSS" sx={{ marginRight:'5px' }} />
            <Chip label="JavaScript" sx={{ marginRight:'5px' }} />
            <Chip label="React" sx={{ marginRight:'5px' }} />
            <Chip label="PHP" sx={{ marginRight:'5px' }} />
            <Chip label="Laravel" sx={{ marginRight:'5px' }} />
            <Chip label="MySQL" sx={{ marginRight:'5px' }} />
            <Chip label="Bootstrap" sx={{ marginRight:'5px' }} />
            <Chip label="Material UI" sx={{ marginRight:'5px' }} />
            <Chip label="Git and GitHub" sx={{ marginRight:'5px' }} />
            <Chip label="Figma" sx={{ marginRight:'5px' }} />
            <Chip label="Jira" sx={{ marginRight:'5px' }} />
            <Chip label="Slack" sx={{ marginRight:'5px' }} />
            <Chip label="Microsoft 365" sx={{ marginRight:'5px' }} />
        </Typography>
    </div>
  )
}

export default Skills