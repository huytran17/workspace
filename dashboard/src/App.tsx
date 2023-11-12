import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseRegistrationForm from "./components/auth/BaseRegistrationForm";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/auth/registration"
            Component={BaseRegistrationForm}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
