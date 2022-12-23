import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/news/News";
import NotFound from "./components/ErrorFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


export default function App() {
  const [country, setCountry] = useState('in');
  return (
    <>
      <Navbar selectedCountry={(val)=>setCountry(val)} />
    <Routes>
      <Route exact strict path="/" element={<News key={'general'} country={country} category={"general"} title={'Latest News'}/>}></Route>
      <Route exact strict path="/business" element={<News key={'business'} country={country} category={"business"} title={'Buisness'}/>}></Route>
      <Route exact strict path="/entertainment" element={<News key={'entertainment'}  country={country}  category={"entertainment"} title={'Entertainment'}/>}></Route>
      <Route exact strict path="/sports" element={<News key={'sports'} country={country}  category={"sports"} title={'Sports'}/>}></Route>
      <Route exact strict path="/technology" element={<News key={'technology'} country={country}  category={"technology"} title={'Technology'}/>}></Route>
      <Route exact strict path="/health" element={<News key={'health'} country={country}  category={"health"} title={'Health'}/>}></Route>
      <Route exact strict path="/science" element={<News key={'science'} country={country}  category={"science"} title={'Science'}/>}></Route>
      <Route exact strict path="*" element={<NotFound/>}></Route>
    </Routes>
        </>
  )
}

