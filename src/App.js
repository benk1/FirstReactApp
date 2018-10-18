import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main_1 from "./components/Main_1";
import Main_2 from "./components/Main_2";
import Main_3 from "./components/Main_3";
import Footer from "./components/Footer";
import Main_4 from "./components/Main_4";
let menu1 = [
  {icon: "", title: "SUPERBLY RESPONSIVE", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis culpanesciunt nihil aut nostrum explicabo"},
  {icon: "", title: "SQUEEKY CLEAN", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis culpanesciunt nihil aut nostrum explicabo"},
  {icon: "", title: "MULTI PURPOSES", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis culpanesciunt nihil aut nostrum explicabo"},
  {icon: "", title: "HIGLY RESPONSIVE ", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis culpanesciunt nihil aut nostrum explicabo"}
]

let blog = [{title: "Blog Title",paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis" }]
let info = [{name: "John Smith", parag: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis culpanesciunt nihil aut nostrum explicabo reprehenderit "}]
const App = (props) => {
  
    return (
      
      <div className="App">
       <Header />
       <Main_1 menu1 = {menu1}/>
       <Main_2  blog = {blog} />
       <Main_3  info = {info} />
       <Main_4 />
       <Footer />
        
      </div>
  
    );
}

export default App;
