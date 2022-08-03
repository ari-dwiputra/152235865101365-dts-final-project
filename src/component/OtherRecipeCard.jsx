import api from "../apis/recipes";
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import RecipeCard from "./RecipeCard";
import { Timer, Restaurant, RoomService } from "@mui/icons-material";
import { Link } from "react-router-dom";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/recipes-length/?limit=5");
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
        Resep Lainnya
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {recipes.map((recipe) => (
          <Card
            key={recipe.key}
            sx={{
              maxWidth: "250px",
              marginBottom: "30px",
              borderRadius: "25px",
            }}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/recipe/${recipe.key}`}
            >
              <CardMedia
                component="img"
                height="250px"
                image={recipe.thumb}
                alt="Paella dish"
              />
              <CardContent align="left">
                <Typography variant="subtitle1" color="text.secondary">
                  {recipe.title}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default RecipeList;
