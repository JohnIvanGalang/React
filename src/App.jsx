import { BrowseRouter, Routes, Route } from "react-router-dom"
// import { Header, Footer } from "./Base.jsx"
import Home from "./Home.jsx"

function App() {

  return (
    // <>
    //   <Header/>
    //   <Home/>
    //   <Footer/>
    // </>

    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/About" element={<Home />} /> */}
      </Routes>
    </BrowseRouter>
  )
}

export default App
