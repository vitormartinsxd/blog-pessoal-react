import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';
import { Box } from '@mui/material';


function Login() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' color='floralwhite'>
            <Grid  alignItems='center' xs={6}>
                <Box className='box'  paddingX={20}>
                    <form >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Bem-Vindo!</Typography>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                       
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button className='btn' type='submit' variant='contained' color='primary' fullWidth>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    
                </Box>
            </Grid>
            <Grid justifyContent='center' alignItems='center' xs={6} style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688_960_720.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );
}

export default Login;