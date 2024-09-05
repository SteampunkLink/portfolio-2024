import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route element={<Demo />}>
            <Route path="/demo" element={<Default />} />
            <Route
              path="/demo/test"
              element={
                <TestState>
                  <Test />
                </TestState>
              }
            />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
