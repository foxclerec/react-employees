import { Component } from "react";

// Components
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
// Styles
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "John", salary: 800, increase: false, rise: false, id: 1 },
        { name: "Mike", salary: 1200, increase: false, rise: false, id: 2 },
        { name: "Bob", salary: 900, increase: true, rise: false, id: 3 },
        { name: "Jack", salary: 2500, increase: false, rise: false, id: 4 },
        { name: "Max", salary: 1900, increase: false, rise: false, id: 5 },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = this.state.data.length + 1;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return { data: newArr };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise); // если rise = true
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);

      default:
        return items; // никак не фильтруем
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />

          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
