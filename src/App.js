import React, { useEffect, Suspense } from "react";
import "./App.css";
import Header from "./Components/Header/Header";

// import aos from "aos";
// import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Pnf from "./Pages/PNF/Pnf";
import Protected from "./Components/ProttectedRoute/ProtectedRoute";

// lazyloading
const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyMenu = React.lazy(() => import("./Pages/Menu/Menu"));
const LazyLogin = React.lazy(() => import("./Pages/Login/Login"));
const LazySignup = React.lazy(() => import("./Pages/Signup/Signup"));
const LazySinglePage = React.lazy(() =>
  import("./Pages/FoodDatail/SinglePage")
);

const LazyUploadfood = React.lazy(() =>
  import("./Pages/UploadFoodForm/UploadFoodForm")
);
function App() {
  // useEffect(() => {
  //   aos.init();
  // }, []);
  return (
    <div className="App">
      <Header />
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<LazyHome></LazyHome>}></Route>
          <Route path="/menu" element={<LazyMenu></LazyMenu>}></Route>
          <Route path="/login" element={<LazyLogin></LazyLogin>}></Route>
          <Route path="/signup" element={<LazySignup></LazySignup>}></Route>
          <Route
            path="/fooddetail/:id"
            element={<LazySinglePage></LazySinglePage>}></Route>

          <Route
            path="/upload"
            element={
              <Protected>
                <LazyUploadfood></LazyUploadfood>
              </Protected>
            }></Route>
          <Route path="*" element={<Pnf></Pnf>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
