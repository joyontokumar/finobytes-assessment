import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
      <ToastContainer position="top-right" autoClose={1500} />
    </BrowserRouter>
  );
};
export default App;
