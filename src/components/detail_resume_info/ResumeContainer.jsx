import { Container, Grid } from '@mui/material'
import React from 'react'
import Skills from './skills/Skills'
import Education from './Education'
import WorkExperience from './work_experience/WorkExperience'
import Projects from './projects/Projects'
import TrainingAndCertification from './traninings/TrainingAndCertification'
import LanguageSkills from './language/LanguageSkills'

function ResumeContainer() {
  return (
    // spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
    <Container maxWidth={true} sx={{ padding:'50px', textAlign:'left' }}>
        <Grid container spacing={2} sx={{ paddingLeft:'50px', paddingRight:'50px' }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                <WorkExperience />
                <Education />
                <TrainingAndCertification />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Skills />
                <Projects />
                <LanguageSkills />
            </Grid>
        </Grid>
    </Container>
  )
}

export default ResumeContainer