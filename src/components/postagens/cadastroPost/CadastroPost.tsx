import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../services/Service";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { toast } from "react-toastify";
import User from "../../../models/User";


function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  // Pega o ID guardado no Store
  const userId = useSelector<UserState, UserState["id"]>(
    (state) => state.id
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

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    tema: null,
    usuario: null
})

const [user, setUser] = useState<User>({
    id: +userId,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
})

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("postagem " + JSON.stringify(postagem));

    // Se o ID for diferente de indefinido tente Atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Postagem atualizada com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.info('Verifique a quantidade de caracter.', {
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

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Postagem cadastrada com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });
        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error('Erro verifique a quantidade de caracteres.', {
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
    back();
  }

  function back() {
    navigate("/posts");
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
            Cadastro de Postagem
          </Typography>
          <TextField
            className="titleList"
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="titulo"
            label="Titulo"
            variant="outlined"
            name="titulo"
            margin="normal"
            fullWidth
          />
          <TextField
            className="titleList"
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="texto"
            label="Texto"
            name="texto"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl className="titleList" fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Temas </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                buscaId(`/temas/${e.target.value}`, setTema, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {temas.map((tema) => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button type="submit" variant="contained" color="primary">
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </Box>
  );
}
export default CadastroPost;
