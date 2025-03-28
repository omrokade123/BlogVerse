import React from 'react'
import Header from './Header';
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router';

const Layout = ({search,setSearch}) => {
  return (
    <>
    <Header title={"BlogVerse"}/>
    <Nav search={search} setSearch={setSearch}/>
    <Outlet/>  {/* Outlet is in between defination of an element which is to be defiend as child of layout route in App.jsx */}
    <Footer/>
    </>
  )
}

export default Layout