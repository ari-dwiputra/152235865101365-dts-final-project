import api from "../apis/recipes";

import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Timer, Restaurant, RoomService } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import notPound from "../assets/not-pound.png";


const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([]);
  let params = useParams();

  useEffect(() => {
    const key = params.key;
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipe/${key}`);
        setRecipe(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.key]);
  return (
    <div style={{ marginLeft: "120px", marginRight: "120px" }}>
      <Typography
        style={{ marginTop: "20px", marginBottom: "15px" }}
        align="left"
        variant="h4"
        color="#7ec746ff"
      >
        {recipe.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%"}}>
          <Stack spacing={2} sx={{ maxWidth: "470px" }}>
            <img
              src={recipe.thumb?recipe.thumb:''}
              alt={recipe.title}
              style={{ borderRadius: "25px"}}
            />
            <Stack direction="row" spacing={2}>
              <IconButton>
                <Timer />
                <Typography variant="body2" color="text.secondary">
                  {recipe.times}
                </Typography>
              </IconButton>
              <IconButton>
                <Restaurant />
                <Typography variant="body2" color="text.secondary">
                  {recipe.servings}
                </Typography>
              </IconButton>
              <IconButton>
                <RoomService />
                <Typography variant="body2" color="text.secondary">
                  {recipe.dificulty}
                </Typography>
              </IconButton>
            </Stack>
          </Stack>
        </div>
        <div style={{ width: "60%" }}>
          <Typography align="left" variant="h4" color="#676767">
            Bahan
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {recipe.ingredient?.map((ingredient) => (
              <div style={{ width: "47%" }}>
                <Typography align="left" variant="h6" color="gray">
                  <ul>
                    <li>{ingredient}</li>
                  </ul>
                </Typography>
              </div>
            ))}
          </Box>
        </div>
      </Box>
      <Box>
        <Typography align="left" variant="h4" color="#676767">
          Cara memasak
        </Typography>
        <Typography align="left" variant="h6" color="gray">
          <List>
            {recipe.step?.map((step) => (
              <ListItem >{step}</ListItem>
            ))}
          </List>
        </Typography>
      </Box>
    </div>
  );
};

export default RecipeDetail;
