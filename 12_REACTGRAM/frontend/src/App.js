import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// Hooks
import { useAuth } from "./hooks/useAuth";

// compontes
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Footer from "./components/Footer";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  const { auth, loading } = useAuth();

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login"/>} />
            <Route path="/login" element={!auth ? <Login /> : <Navigate to="/"/>} />
            <Route path="/register" element={!auth ? <Register /> : <Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
