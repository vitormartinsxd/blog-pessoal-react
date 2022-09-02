import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './ListaTema.css';

function ListaTema() {

  return (
    <>
      <Box className='tema' m={2} >
        <Card className='card02' variant="outlined">
          <CardContent className='card02'>
            <Typography gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h5">
              Minha descrição
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}


export default ListaTema;