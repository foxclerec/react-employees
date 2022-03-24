import { Component } from "react";

// Styles
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    // clear fields after
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <p>Добавьте нового сотрудника</p>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Имя"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-success">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
