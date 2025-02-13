import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavbarSimple from "./components/Navbar";

function App() {
  return (
    <div className="font-sans">
      <NavbarSimple />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
