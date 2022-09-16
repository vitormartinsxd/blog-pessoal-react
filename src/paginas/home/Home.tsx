import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagens/TabPostagem";
import { Link, useNavigate } from "react-router-dom";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/UserReducer";
import { toast } from "react-toastify";
import Carrossel from "../../components/carrossel/Carrosel";
import ModalTema from "../../components/temas/modalTema/ModalTema";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate("/login");
    }
  }, [token]);

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
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
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
              <ModalPostagem />
            </Box>
            <Box marginRight={1}>
              <ModalTema/>
            </Box>
          </Box>
        </Grid>
        <Grid  item xs={6}>
        <Carrossel/>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
