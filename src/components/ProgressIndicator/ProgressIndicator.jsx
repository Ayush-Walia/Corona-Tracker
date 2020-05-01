import React from 'react';
import { CircularProgress, Typography, Box }from '@material-ui/core';
import styles from './ProgressIndicator.module.css'

export default function ProgressIndicator() {

  return (
    <div>
      <CircularProgress className={styles.progressIndicatorContainer}/>
      <Typography component={'span'}>
            <Box fontWeight="fontWeightBold">
                Loading...
            </Box>
        </Typography>
    </div>
  );
}