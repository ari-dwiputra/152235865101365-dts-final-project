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
import { Timer, Restaurant, RoomService } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RecipeCard = ({ data }) => {
  return (
    <>
      <Card
        key={data.key}
        sx={{
          maxWidth: "400px",
          marginBottom: "30px",
          borderRadius: "25px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={`/recipe/${data.key}`}>
          <CardMedia
            component="img"
            height="250px"
            image={data.thumb}
            alt="Paella dish"
          />
          <CardContent>
            <Typography align="left" variant="h6" color="text.secondary">
              {data.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <Timer />
              <Typography variant="body2" color="text.secondary">
                {data.times}
              </Typography>
            </IconButton>
            <IconButton>
              <Restaurant />
              <Typography variant="body2" color="text.secondary">
                {data.portion}
              </Typography>
            </IconButton>
            <IconButton>
              <RoomService />
              <Typography variant="body2" color="text.secondary">
                {data.dificulty}
              </Typography>
            </IconButton>
          </CardActions>
        </Link>
      </Card>
    </>
  );
};
export default RecipeCard;
