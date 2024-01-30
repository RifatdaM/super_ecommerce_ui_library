import { Outlet } from "react-router-dom";
import "./App.css";
import ComponentsBar from "./components/ComponentsBar/ComponentsBar";

function App() {
  return (
    <div>
      {/* list of components */}

      {/* sliders 5 type */}
      {/* category List */}
      {/* flash sell */}
      {/* comment section */}
      {/* product card */}
      {/* <AllCards /> */}
      {/* banners */}
      {/* product block */}
      {/* flash sell block */}
      {/* promise block */}

      {/* page */}

      {/* home */}
      {/* product details */}
      {/* category */}
      {/* flash sell */}
      {/* cart */}
      {/* checkout */}
      {/* user dashboard */}
      {/* track */}
      <ComponentsBar />
      <div className=" w-full h-[2px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% my-6"></div>
      <Outlet />
    </div>
  );
}

export default App;
