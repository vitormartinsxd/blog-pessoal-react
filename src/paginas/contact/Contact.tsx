import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";
import { Box } from "@mui/material";
import { Button, Grid, TextareaAutosize } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";

function Contact() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  function enviar() {
    alert("Formulario enviado com sucesso.");
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "silver" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <h2>Entre em Contato!</h2>

            <TextField
              
              id="filled-basic"
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

            <TextField
              
              id="filled-basic"
              type="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

            <TextField
              
              id="outlined-multiline-static"
              name="assunto"
              label="Assunto"
              margin="normal"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              className="btn02"
              type="submit"
              variant="contained"
              color="primary"
              onClick={enviar}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
        <Grid className="imagem5" item xs={6}></Grid>
      </Grid>
    </>
  );
}

export default Contact;
