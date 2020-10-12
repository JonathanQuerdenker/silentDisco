// import Copyright from "../shared_components/footer";
import React from "react";
import {Link} from "react-router-dom";
// ----------MUI---------------
import { makeStyles, Grid, Typography } from '@material-ui/core/';

export default function PickUserRole (){

    const useStyles = makeStyles(theme => ({
        root: {

            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            overflow:'auto',
            bottom: 0,
            top: 0
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
        link: {
            margin:0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
            textAlign: "center"

        },
        rightGrid: {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            borderLeft:'solid #6f6f709a .5em ',
            padding: '1.5em'
        },
        leftGrid:{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
        }



    }));
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={6}  className={classes.leftGrid}>
                <Link to='/dj/'className={classes.link}>
                    <Typography  component="h1" variant="h1">
                        DJ
                    </Typography>
                </Link>
            </Grid>
            <Grid className={classes.rightGrid} item xs={12} sm={6}>
                <Link to='/stage/' className={classes.link} >
                    <Typography  component="h1" variant="h1">
                        PARTY ANIMAL
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
}

