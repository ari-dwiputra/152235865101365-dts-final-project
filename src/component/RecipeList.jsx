import api from "../apis/recipes";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/recipes-length/?limit=9");
        setRecipes(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginLeft: "120px", marginRight: "120px" }}>
      <Typography
        style={{ marginTop: "20px", marginBottom: "10px" }}
        align="left"
        variant="h4"
        color="#7ec746ff"
      >
        Resep Terbaru
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.key} data={recipe} />
        ))}
      </Box>
    </div>
  );
};

export default RecipeList;
