import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button'


import headers from '../api/headers'
import storage from '../helpers/localStorage'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, surname, file, data, isDone, isInProgress) {
  return { name, surname, file, data, isDone, isInProgress };
}

export default function UserList() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const user = JSON.parse(storage.getItem('user'))

  useEffect(() => {
    let url = user.isAdmin 
      ? `http://localhost:3000/api/waybill/admin/${user.id}`
      : `http://localhost:3000/api/waybill/driver/${user.id}`

    fetch( url, { method: 'GET', headers } )
      .then(res => res.json())
      .then(
        (result) => {
          setRows(result.wayBills);
        },
        (error) => {
          setRows(error);
        }
      )
  }, [])

  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Выполнение путевых листов</caption>
        <TableHead>
          <TableRow>
            <TableCell>Администратор</TableCell>
            <TableCell align="left">Водитель</TableCell>
            <TableCell align="left">Прикрепление</TableCell>
            <TableCell align="left">Дата создания</TableCell>
            <TableCell align="left">В прогрессе</TableCell>
            <TableCell align="left">Выполнено</TableCell>
            <TableCell align="left">Дата завершения</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell scope="row">{`${row.admin.name} ${row.admin.surname}`}</TableCell>
              <TableCell align="left">{row.driver ? `${row.driver.name} ${row.driver.surname}` : '---'}</TableCell>
              <TableCell align="left"><div>
                <Tooltip title="Открыть">
                <IconButton color="inherit" >
            <Badge badgeContent={0} color="secondary">
              <PictureAsPdfIcon />
            </Badge>
          </IconButton>
                </Tooltip>
                </div>
              </TableCell>
              <TableCell align="left">{moment(row.create_date).format('D.MM.YYYY HH:mm')}</TableCell>
              <TableCell align="left">{`${row.inProgress ? 'in progress' : ''}`}</TableCell>
              <TableCell align="left">{`${row.done ? 'done' : ''}`}</TableCell>
              <TableCell align="left">{`${row.end_date ? moment(row.end_date).format('D.MM.YYYY HH:mm') : '---'}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

