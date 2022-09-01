import React from 'react';
import { AppBar, Toolbar, Typography, Fab} from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { Logout } from '@mui/icons-material';



function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{background: '#222222'}}>
                    
                    <Box mx={1} className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                               
                                <Logout style={{ fontSize: 30, color: "white" }} />
                               
                            </Box>
                        </Link>
                       
                        
                    </Box>
                    
                    
                </Toolbar>
            </AppBar>
        </>
    )
    
}

export default Navbar;