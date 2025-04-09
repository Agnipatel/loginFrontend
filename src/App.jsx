import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import GitaPage from "./Pages/GitaPage";
import Silder from "./Component/Silder";
import Chapters from "./Pages/Chapters";
import Chaptersmain from "./Pages/Chaptersmain";
import Chapter1 from "./Pages/Chapter1";
import Chapter2 from "./Pages/Chapter2";
import Chapter3 from "./Pages/Chapter3";
import Chapter4 from "./Pages/Chapter4";
import Chapter5 from "./Pages/Chapter5";
import Chapter6 from "./Pages/Chapter6";
import Chapter7 from "./Pages/Chapter7";
import Chapter8 from "./Pages/Chapter8";
import Chapter9 from "./Pages/Chapter9";
import Chapter10 from "./Pages/Chapter10";
import Chapter11 from "./Pages/Chapter11";
import Lifepage from "./Pages/Lifepage";

import Profile from "./Pages/Profile";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Silder" element={<Silder />} />
        <Route path="/Chapters" element={<Chapters />} />
        <Route path="/Chaptersmain" element={<Chaptersmain />} />
        <Route path="/Chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/Chapter3" element={<Chapter3 />} />
        <Route path="/Chapter4" element={<Chapter4 />} />
        <Route path="/Chapter5" element={<Chapter5 />} />
        <Route path="/Chapter6" element={<Chapter6 />} />
        <Route path="/Chapter7" element={<Chapter7 />} />
        <Route path="/Chapter8" element={<Chapter8 />} />
        <Route path="/Chapter9" element={<Chapter9 />} />
        <Route path="/Chapter10" element={<Chapter10 />} />
        <Route path="/Chapter11" element={<Chapter11 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Lifepage" element={<Lifepage />} />


        
        

        <Route path="/gita" element={<GitaPage />} />

      </Routes>
    </Router>
  );
}

export default App;
