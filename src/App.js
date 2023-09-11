import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Constitution from "./pages/Constitution";
import Membership from "./pages/Membership";
import Enquiry from "./pages/Enquiry";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} errorElement={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="constitution" element={<Constitution />} />
        <Route path="membership" element={<Membership />} />
        <Route path="enquiry" element={<Enquiry />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
