import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Postagem from "../../../models/Postagem";
import Comentarios from "../coments/Coments";
import Carrosel from "../../carrossel/Carrosel";

interface PostsProps {
  post: Postagem;
}

function Posts({ post }: PostsProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein?! 👏👏"]);
  const [comments2, setComments2] = useState(["Otimo, Post! 👏👏"]);


  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  return (
      <Box m={2}>
      <Card className="listPost" variant="outlined">
        <CardContent>
          <Typography className="titleList" color="textSecondary" gutterBottom>
            Postagens
          </Typography>
          <Typography className="titleList" variant="h5" component="h2">
            {post.titulo}
          </Typography>
          <Typography className="titleList" variant="body2" component="p">
            {post.texto}
          </Typography>
          <Typography className="titleList" variant="body2" component="p">
            {post.tema?.descricao}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="center" mb={1.5}>
            <Link
              to={`/formularioPostagem/${post.id}`}
              className="text-decorator-none"
            >
              <Box mx={1}>
                <Button
                  variant="contained"
                  className="marginLeft"
                  size="small"
                  color="primary"
                >
                  atualizar
                </Button>
              </Box>
            </Link>
            <Link
              to={`/deletarPostagem/${post.id}`}
              className="text-decorator-none"
            >
              <Box mx={1}>
                <Button variant="contained" size="small" color="secondary">
                  deletar
                </Button>
              </Box>
            </Link>
          </Box>
        </CardActions>

        <form onSubmit={handleCreateNewComment}>
          <strong className="Post02">Deixe seu feedback</strong>
          <div>
          <textarea
            className="Post02"
            name="comment"
            placeholder="Deixe seu comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            required
          />
          </div>
          <footer>
            <button className="Post" type="submit">Publicar</button>
          </footer>
        </form>

        <div>
          {comments.map((comment) => {
            return <Comentarios conteudo={comment} />;
          })}
        </div>

        <div>
          {comments2.map((comment) => {
            return <Comentarios conteudo={comment} />;
          })}
        </div>
      </Card>
      </Box>
         
   
  );
}

export default Posts;
