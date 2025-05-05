import { Outlet } from "react-router";
import "./App.css";
import BottomHeader from "./components/BottomHeader/BottomHeader";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomHeader />
    </>
  );
}

export default App;
