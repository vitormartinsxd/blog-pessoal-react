import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { Https, Person } from "@material-ui/icons";

function Login() {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <Grid
      className="box"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      color="floralwhite"
    >
      <Grid className="box" alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <div className="icon">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </div>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h4"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Login
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              type="email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person className="icons" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Https className="icons" />
                  </InputAdornment>
                ),
              }}
            />
            <Box marginTop={2} textAlign="center">
              <Button
                className="btn"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrausuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid className="imagem" xs={6}></Grid>
    </Grid>
  );
}

export default Login;
