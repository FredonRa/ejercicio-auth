import React from "react";
import app from "../firebase";
import {Button, makeStyles, Container} from '@material-ui/core'
import {Link} from 'react-router-dom'
import theme from '../TemaConfig'

const useStyles = makeStyles((theme) => ({
  Link: {
    textDecoration: 'none', 
    color: 'white'
  },
  Container: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  Button: {
    height: '2rem'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Container className={classes.Container}>
      <h1>Estás en el home</h1>
      <Button variant="contained" color="primary" className={classes.Button}><Link to="/RutaPrivada" className={classes.Link}>Ir a una ruta privada</Link></Button>
    </Container>
  );
};

export default Home;
