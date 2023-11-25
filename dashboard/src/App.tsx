import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { keyGenerator } from "./utils/key-generator";
import { Suspense } from "react";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Suspense>
          <Routes>
            {routes.map((route) => (
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
  );
}
