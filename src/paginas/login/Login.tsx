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
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { Https, Person } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToken, addId } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();

  let navigate = useNavigate();
  
  const dispatch = useDispatch()

  const [token, setToken] = useState('')

  const [userLogin, setUserLogin] = useState<UserLogin>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
  })

  // Crie mais um State para pegar os dados retornados a API
  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      token: '',
      foto: ""
  })

  useEffect(() => {
      if (token !== "") {
          dispatch(addToken(token))
          navigate('/home')
      }
  }, [token])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value
      })
  }

  useEffect(() => {
    if (respUserLogin.token !== "") {

        // Verifica os dados pelo console (Opcional)
        console.log("Token: " + respUserLogin.token)
        console.log("ID: " + respUserLogin.id)

        // Guarda as informações dentro do Redux (Store)
        dispatch(addToken(respUserLogin.token))
        dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
        navigate('/home')
    }
}, [respUserLogin.token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      try {

          /* Se atente para a Rota de Logar, e também substitua o método
          setToken por setRespUserLogin */

          await login(`/usuarios/logar`, userLogin, setRespUserLogin)
          toast.success('Usuário logado com sucesso!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });

      } catch (error) {
        toast.error('Dados incorretos, digite novamente' , {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
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
