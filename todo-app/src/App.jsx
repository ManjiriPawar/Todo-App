import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
