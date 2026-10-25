import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <Shop /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
