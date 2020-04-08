import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import authService from '../../services/authService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {AlternateEmail, LockOutlined} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        height: '30vh',
        width: '30%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '10px auto',
    },
    signInButton: {
        alignSelf: 'flex-start',
        marginLeft: '40px',
    }
  }));

const SignIn = ({ onSignIn }) => {
    const [user, setUser] = useState({ email: "ayali@hotmail.com", password: "paris123" });
    const classes = useStyles();

    const handleEmailChange = ({ target }) => {
        setUser(u => u = { ...u, email: target.value });
    }

    const handlePasswordChange = ({ target }) => {
        setUser(u => u = { ...u, password: target.value });
    }

    const handleSignIn = async () => {
        const fbuser = await authService.signIn(user);
        onSignIn(fbuser.data);
    }

    return (
        <React.Fragment>
            <form className={classes.formContainer}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AlternateEmail />
                    </Grid>
                    <Grid item>
                        <TextField value={user.email} label="Email Address" onChange={handleEmailChange} />
                    </Grid>
                </Grid>
                
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockOutlined />
                    </Grid>
                    <Grid item>
                        <TextField value={user.password} type="password" label="Password" onChange={handlePasswordChange} />
                    </Grid>
                </Grid>

                <Button className={classes.signInButton} variant="contained" color='primary' onClick={handleSignIn}> Login </Button>
            </form>
        </React.Fragment>
    )
}

export default SignIn;