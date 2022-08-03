import React from "react";
import Header from "../component/Header";
import SearchCard from "../component/SearchCard";
import ListRecipe from "../component/RecipeList";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchCard />
      <ListRecipe />
      <Footer />
      
    </div>
  );
}
