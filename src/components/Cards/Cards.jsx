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

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
};

const formatDate = (rawDate) => {
    const [date, time] = rawDate.split(' ');
    let [day, month, year] = date.split('/');
    if (Math.log10(month)+1 === 1) {
        month = "0"+month
    }  
    return `${day} ${months[month]} ${year}, ${time} IST`
};

const Cards = ({ data: { active, confirmed, recovered, deaths, lastupdatedtime }}) => {
    return (
        <div className={ styles.container }> 
            <Grid container spacing={2} justifyContent="center">
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Confirmed") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start = {0} end = {parseInt(confirmed)} duration = {2.5} separator = "," />
                        ) }
                        <Typography variant="subtitle2">Number of total cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Active") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={parseInt(active)} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Recovered") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={parseInt(recovered)} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        { getTypography("fontWeightBold", "Deaths") }
                        { getTypography("fontWeightMedium", 
                            <CountUp start={0} end={parseInt(deaths)} duration={2.5} separator="," />
                        ) }
                        <Typography variant="subtitle2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <br />
            <Typography component={'span'} color="textSecondary" className={styles.lastUpdate}>
                <Box fontWeight="fontWeightRegular">
                    <span>Last Updated: {formatDate(lastupdatedtime)}</span>
                </Box>
            </Typography>
        </div>
    )
}

export default Cards;