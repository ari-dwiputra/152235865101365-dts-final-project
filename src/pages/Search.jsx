import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import SearchCard from '../component/SearchCard'
import SearchList from '../component/SearchList'

export default function DetailFilm() {
  return (
    <div>
        <Header/>
        <SearchCard/>
        <SearchList/>
        <Footer/>
    </div>
  )
}
