import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
         <Route path="/" exact element={<Homepage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
