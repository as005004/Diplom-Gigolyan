import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import headers from '../api/headers'
import { useHistory } from 'react-router';

export default function AddressForm() {
  let history = useHistory();

  const nameInput = useRef(null);
  const surnameInput = useRef(null);
  const emailInput = useRef(null);
  const loginInput = useRef(null);
  const passwordInput = useRef(null);
  const isAdminInput = useRef(null);

  const handleSave = () => {
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: nameInput.current.value,
        surname: surnameInput.current.value,
        passwd: passwordInput.current.value,
        email: emailInput.current.value,
        login: loginInput.current.value,
        isAdmin: isAdminInput.current.checked,
      }),
      headers,
    })
      .then(data => data.json())
      .then(data => {
        if(data.result && data.result === 'ok') {
          history.replace('/user-list')
        }
      })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Новый пользователь
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Login"
            name="Login"
            label="Логин"
            fullWidth
            autoComplete=" Login"
            inputRef={loginInput}
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
           inputRef={passwordInput}
         />
       </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Имя"
            fullWidth
            autoComplete="name"
            inputRef={nameInput}
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
            inputRef={surnameInput}
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
            inputRef={emailInput}
          />
        </Grid>
        <Grid item xs={12} container justify="space-between">          
          <FormControlLabel
            control={<Checkbox id="Admin" name="Admin" inputRef={isAdminInput} />}
            label="Администратор"
          />
          <div>
            <Button variant="contained" color="primary" onClick={handleSave}>Создать</Button>
            &nbsp;
            <Button variant="contained" color="primary">Отмена</Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}