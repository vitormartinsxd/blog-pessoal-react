import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';


function Home() {
    return (
        <>
            <Grid className='caixa'  container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className='titulo' style={{ color: "black", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo' style={{ color: "black", fontWeight: "bold" }}>Blog com intuito <br /> em noticias sobre futebol.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pixabay.com/photo/2017/06/26/19/53/team-2444978_960_720.jpg" alt="" width='600px' height='450px'/>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
