import "./App.css";
import { Header, Footer } from "./components/features/index";
import {
  Signup,
  Home,
  Login,
  Schedule,
  Standings,
  Teams,
} from "./components/pages/index";
function App() {
  return (
    <div className="App  ">
      <Header />
      <section className=" h-screen grid place-items-center  ">
        <div className=" w-screen mx-auto  ">
          <Signup />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
