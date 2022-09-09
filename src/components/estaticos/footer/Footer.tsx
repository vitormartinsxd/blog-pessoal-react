import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { Copyright } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  var footerComponent;

  if (token != "") {
    footerComponent = <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid alignItems="center" item xs={12}>
      <Box style={{ backgroundColor: "#222222", height: "80px" }}>
        <Box
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            Siga-me nas redes sociais{" "}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a
            href="https://www.facebook.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ fontSize: 30, color: "white" }} />
          </a>
          <a
            href="https://www.instagram.com/generationbrasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: 30, color: "white" }} />
          </a>
          <a
            href="https://github.com/vitormartinsxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 30, color: "white" }} />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
          </a>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#212121", height: "60px" }}>
        <Box paddingTop={1}>
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            <Copyright style={{ fontSize: 14, color: "white" }} /> 2022
            Copyright:{" "}
          </Typography>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://brasil.generation.org"
            rel="noopener noreferrer"
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ color: "white" }}
              align="center"
            >
              brasil.generation.org
            </Typography>
          </a>
        </Box>
      </Box>
    </Grid>
  </Grid> 
  }
  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
