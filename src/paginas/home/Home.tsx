import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagens/TabPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  
  useEffect(() => {
    if (token == "") {
        alert("Você precisa estar logado")
        navigate("/login")

    }
}, [token])

  return (
    <>
    
      
      <Grid
        className="caixa"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#292929" }}
      >
        <Grid  alignItems="center" item xs={6}>
          <Box  paddingX={20}>
            <Typography
              variant="h2"
              gutterBottom
              color="textPrimary"
              component="h2"
              align="center"
              className="titulo"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h4"
              align="center"
              className="titulo"
              style={{ color: "black", fontWeight: "bold" }}
            >
              <br />
              <br />
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>
            <Button variant="outlined" className="botao2">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid className="imagem3"  item xs={6}></Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
