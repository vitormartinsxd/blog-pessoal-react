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
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    navigate("/login");
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ background: "#222222" }}>
          <Box mx={1} className="cursor">
            <img
              src="https://img2.gratispng.com/20180301/oze/kisspng-logo-gratis-download-color-thanksgiving-badge-5a97df2c16c818.4278230415199025080933.jpg"
              alt=""
              width="60px"
              height="50px"
            />
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
    </>
  );
}

export default Navbar;
