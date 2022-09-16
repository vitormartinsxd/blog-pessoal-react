import React from "react";
import { AppBar, Toolbar, Typography, Fab } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import {
  AddBox,
  ContactPage,
  Logout,
  Pages,
  PostAdd,
} from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
  navigate('/login')
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = 
      <AppBar position="static">
        <Toolbar variant="dense" style={{ background: "#222222" }}>
          <Box mx={1} className="cursor">
           
          </Box>
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={4} className="cursor">
                <Home
                  titleAccess="Home"
                  style={{ fontSize: 30, color: "white" }}
                />
              </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none">
              <Box mx={4} className="cursor">
                <Typography variant="h6" color="inherit">
                  <PostAdd
                    titleAccess="Postagem"
                    style={{ fontSize: 30, color: "white" }}
                  />
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={4} className="cursor">
                <Pages
                  titleAccess="Temas"
                  style={{ fontSize: 30, color: "white" }}
                />
              </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={4} className="cursor">
                <AddBox
                  titleAccess="Cadastrar Temas"
                  style={{ fontSize: 30, color: "white" }}
                />
              </Box>
            </Link>
            <Link to="/contato" className="text-decorator-none">
              <Box mx={4} className="cursor">
                <ContactPage
                  titleAccess="Pagina de Contato"
                  style={{ fontSize: 30, color: "white" }}
                />
              </Box>
            </Link>

            <Box mx={4} className="cursor" onClick={goLogout}>
              <Logout
                titleAccess="Logout"
                style={{ fontSize: 30, color: "white" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
