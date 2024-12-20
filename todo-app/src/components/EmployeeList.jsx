import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeeActions";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
