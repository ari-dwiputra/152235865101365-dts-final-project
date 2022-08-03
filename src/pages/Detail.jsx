import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import RecipeDetail from '../component/RecipeDetail'
import OtherRecipeCard from '../component/OtherRecipeCard'

export default function DetailFilm() {
  return (
    <div>
        <Header/>
        <RecipeDetail/>
        <OtherRecipeCard/>
        <Footer/>
    </div>
  )
}
