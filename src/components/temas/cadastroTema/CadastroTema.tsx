import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import "./CadastroTema.css";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("tema " + JSON.stringify(tema));

    // Se o ID for diferente de indefinido tente Atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        alert("Tema atualizado com sucesso");

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        alert("Tema cadastrado com sucesso");

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    }
    back();
  }

  function back() {
    navigate("/temas");
  }

  return (
    <Box className="tamanhoPost">
      <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Cadastrar Tema
          </Typography>
          <TextField
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
            id="descricao"
            label="Descrição"
            variant="outlined"
            name="descricao"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Finalizar
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default CadastroTema;
