import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Section from '../../Section'
import ImageSwiper from './ImageSwiper'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: "25px"
    }
}))

function DetailBody(props) {
    const classes = useStyles()
    return <Section id="portfolio-details">
        <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
                <ImageSwiper />
            </Grid>

            <Grid item md={4} xs={12} >
                <ProjectCard />
            </Grid>

            <Grid item xs={12} className={classes.paper}>

                <Typography variant="h4" gutterBottom >
                    Calculator - Backend Parser
                    </Typography>
                <Typography paragraph>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi l
                    andae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium
                    nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </Typography>

            </Grid>

        </Grid>
    </Section>

}

export default DetailBody