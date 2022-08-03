import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [error, setError] = useState();
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      setError("Kata kunci tidak boleh kosong!");
    } else {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div>
      {" "}
      <div style={{ marginLeft: "120px", marginRight: "120px" }}>
        <Box sx={{ marginTop: "20px", marginBottom: "15px" }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography align="left" variant="h4" color="#7ec746ff">
              Masak apa hari ini?
            </Typography>
            <Stack spacing={2} direction="row" sx={{ marginTop: "10px" }}>
              <TextField
                id="outlined-recipe"
                className="inputRounded"
                label="Masak apa hari ini?"
                onChange={handleChange}
                placeholder="Cari.."
                sx={{ borderRadius: "50px", width: "600px" }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  width: "150px",
                  backgroundColor: "#7ec746ff",
                  "&:hover": {
                    backgroundColor: "#0dbf0d",
                  },
                }}
                type="submit"
              >
                Cari Resep
              </Button>
            </Stack>
            {error && <Alert style={{ marginTop:"20px" }} severity="error">{error}</Alert>}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SearchCard;
