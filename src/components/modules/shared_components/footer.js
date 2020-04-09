import React from 'react';
// MUI
import {Typography, Link} from '@material-ui/core/';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://github.com/JonathanQuerdenker">
                THE | MARVELOUS | JONATHAN | HIMSELF
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
