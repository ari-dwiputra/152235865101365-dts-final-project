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
import RecipeCard from "./RecipeCard";
import { Timer, Restaurant, RoomService } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const SearchList = () => {
  const [recipes, setRecipe] = useState([]);
  let params = useParams();

  useEffect(() => {
    const key = params.key;
    const fetchData = async () => {
      try {
        const response = await api.get(`/search/?q=${key}`);
        setRecipe(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.key]);
  return (
    <div style={{ marginLeft: "120px", marginRight: "120px", maxHeight:"100%" }}>
      <Typography
        style={{ marginTop: "20px", marginBottom: "10px" }}
        align="left"
        variant="h4"
        color="#7ec746ff"
      >
        Menampilkan hasil untuk <b>{params.key}</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {recipes.slice(0,12).map((recipe) => (
          <RecipeCard key={recipe.key} data={recipe} />
        ))}
      </Box>
    </div>
  );
};

export default SearchList;
