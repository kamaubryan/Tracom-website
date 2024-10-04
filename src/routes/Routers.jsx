import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Home />} />

          {/* Other routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />

    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default Routers;
