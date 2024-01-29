import { Outlet } from "react-router-dom";
import "./App.css";
import ComponentsBar from "./components/ComponentsBar/ComponentsBar";

function App() {
  return (
    <div className="px-4 md:px-8 lg:px-20">
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
      <Outlet />
    </div>
  );
}

export default App;
