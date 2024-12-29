import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import PremiumPage from "./components/PremiumPage";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<LogInPage></LogInPage>}></Route>
          <Route path="/premium" element={<PremiumPage></PremiumPage>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
