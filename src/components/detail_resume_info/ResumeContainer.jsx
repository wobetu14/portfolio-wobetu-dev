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
    <Container maxWidth={true} sx={{ padding:'50px', textAlign:'left' }}>
        <Grid container spacing={2} sx={{ paddingLeft:'50px', paddingRight:'50px' }}>
            <Grid item xs={6}>
                <WorkExperience />
                <Education />
                <TrainingAndCertification />
            </Grid>

            <Grid item xs={6}>
                <Skills />
                <Projects />
                <LanguageSkills />
            </Grid>
        </Grid>
    </Container>
  )
}

export default ResumeContainer