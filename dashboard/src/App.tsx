import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import appRouter from "./routes";
import { keyGenerator } from "./utils/key-generator";
import BaseOverlay from "@/components/system/overlay/BaseOverlay";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Suspense>
            <Routes>
              {appRouter.map((route) => (
                <Route
                  key={keyGenerator()}
                  path={route.path}
                  Component={route.component}
                ></Route>
              ))}
            </Routes>
          </Suspense>
        </div>
      </Router>

      <ToastContainer
        autoClose={5000}
        pauseOnHover={false}
        newestOnTop={true}
        theme="colored"
      />
      <BaseOverlay />
    </>
  );
}
