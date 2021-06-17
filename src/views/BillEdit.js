import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Новый пользователь
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Имя"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="surname"
            name="surname"
            label="Фамилия"
            fullWidth
            autoComplete="surname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Login"
            name="Login"
            label="Login"
            fullWidth
            autoComplete=" Login"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Admin"
            name="Admin"
            label="Admin"
            fullWidth
            autoComplete="Admin"
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            label="Пароль"
            fullWidth
            autoComplete="Password"
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}