import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

const getTypography = (weight, text) => {
    return (
        <Typography variant="h5" component={'span'}>
            <Box fontWeight={weight}>
                {text}
            </Box>
        </Typography>
    )
}

const Cards = ({ data: { active, confirmed, recovered, deaths }}) => {
    return (
        <div className={ styles.container }> 
            <Grid container spacing={2} justify="center">
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Confirmed") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start = {0} end = {confirmed} duration = {2.5} separator = "," />
                        ) }
                        <Typography variant="subtitle2">Number of total cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Active") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={active} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Recovered") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={recovered} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Deaths") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={deaths} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;