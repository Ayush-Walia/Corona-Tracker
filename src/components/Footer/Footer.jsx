import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import * as Icon from 'react-feather';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const StyledButton = withStyles({
    root: {
      background: styledBy('color', {
        black: 'linear-gradient(45deg, #000000 30%, #000000 90%)',
        blue: 'linear-gradient(45deg, #0077B5 30%, #0077B5 90%)',
        red: 'linear-gradient(45deg, #D44638 30%, #D44638 90%)'
      }),
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 42,
      padding: '0 30px',
      boxShadow:  styledBy('color', {
        black: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        red: '0 3px 5px 2px rgba(255, 105, 135, .3)'
      }),
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const Footer = () => {
    return (
        <div>
            <footer>
                <br /> <br /> <br />
                <StyledButton color={"black"} variant="contained" href="https://github.com/Ayush-Walia/Corona-Tracker">
                    <Icon.GitHub />&nbsp;&nbsp;
                    <span>Open Sourced on GitHub</span>
                </StyledButton>
                <br /> <br />
                <StyledButton color={"black"} variant="contained" href="https://github.com/Ayush-Walia">
                    <Icon.GitHub />
                </StyledButton>
                <StyledButton color={"blue"} variant="contained" href="https://www.linkedin.com/in/ayush-walia-091ba6195/">
                    <Icon.Linkedin />
                </StyledButton>
                <StyledButton color={"red"} variant="contained" href="mailto:ayushwalia999@gmail.com">
                    <Icon.Mail />
                </StyledButton>
            </footer>
        </div>
    )
}

export default Footer;