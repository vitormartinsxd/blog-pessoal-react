import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal'
import {Button,Box } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import './ModalTema.css';
import CadastroTema from '../cadastroTema/CadastroTema';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalTema () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon className='x' onClick={handleClose}/>
      
      </Box>
      
      <CadastroTema/>
      
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        className="botao"
        onClick={handleOpen}>Novo Tema</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalTema