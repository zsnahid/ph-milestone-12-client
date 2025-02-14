import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer";
import NavbarSimple from "./components/Shared/Navbar";

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
