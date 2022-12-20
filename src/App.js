import "./App.css";
import { Header, Footer } from "./components/features/index";
import { Route, Routes } from "react-router-dom";
import {
  Signup,
  Home,
  Login,
  Schedule,
  Standings,
  Teams,
  PageNotFound,
  Profile,
} from "./components/pages/index";

function App() {

  return (
    <div className="App  ">
      <Header />
      <section className=" min-h-screen">
      
        <Login/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
