import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { active, confirmed, recovered, deaths, lastupdatedtime }}) => {
    if(!active)
        return "Loading ...";
    return (
        <div className={ styles.container }> 
            <Grid container spacing={3} justify="center">
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed} duration = {2.0} separator = "," />
                        </Typography>
                        <Typography variant="body2">Number of total cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {active} duration = {2.0} separator = "," />
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {recovered} duration = {2.0} separator = "," />
                        </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {deaths} duration = {2.0} separator = "," />
                        </Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;