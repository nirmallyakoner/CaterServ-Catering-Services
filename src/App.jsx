import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Page/Layout/Header/Header";
import Footer from "./Page/Layout/Footer/Footer";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Check_Token } from "./Redux/Authslice";
const Home = lazy(() => import("./Page/Layout/Home/Home"));
const Services = lazy(() => import("./Page/Layout/Home/Services"));
const CreateServices = lazy(() =>
  import("./Page/Layout/Services/CreateServices")
);
const UpdateServices = lazy(() =>
  import("./Page/Layout/Services/UpdateServices")
);
const Login = lazy(() => import("./Page/Auth/Login/Login"));
const Register = lazy(() => import("./Page/Auth/Register/Register"));
const About = lazy(() => import("./Page/Layout/Home/About"));

function App() {
  const dispatch = useDispatch();
  function PrivateRoute({ children }) {
    // console.log(children, "children");

    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }

  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/about",
      Component: <About />,
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/createServices",
      Component: <CreateServices />,
    },

    {
      path: "/services",
      Component: <Services />,
    },
    {
      path: "/updateServices/:id",
      Component: <UpdateServices />,
    },
  ];
  // useEffect(() => {
  //   dispatch(Check_Token());
  // }, []);

  return (
    <>
      <Suspense fallback={<h2 className="loader"></h2>}>
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  exact
                  path={route.path}
                  key={index}
                  element={route.Component}
                />
              );
            })}

            {PrivateRouteNames?.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
