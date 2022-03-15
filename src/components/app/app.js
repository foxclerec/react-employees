// Components
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
// Styles
import "./app.css";

const app = () => {
  const data = [
    { name: "John", salary: 800, increase: false, id: 1 },
    { name: "Mike", salary: 1200, increase: false, id: 2 },
    { name: "Bob", salary: 900, increase: true, id: 3 },
    { name: "Jack", salary: 2500, increase: false, id: 4 },
    { name: "Max", salary: 1900, increase: false, id: 5 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};

export default app;
