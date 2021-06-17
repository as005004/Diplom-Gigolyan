import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import headers from '../api/headers'
import storage from '../helpers/localStorage'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Putevoi List
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();

  if(storage.getItem('user')) {
    history.replace('/bill-list')
  }

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  const handleLogInClick = (e) => {
    fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email,passwd,}),
      headers,
	  })
      .then(data => data.json())
      .then(data => {
        if(data.result && data.result === 'ok') {
          storage.setItem('user', JSON.stringify(data.user))
          storage.setItem('isAdmin', data.user.isAdmin)
          history.replace('/bill-list')
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogInClick}
          >
            Войти
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
       <Copyright/> 
      </Box>
    </Container>
  );
}