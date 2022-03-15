import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <p>Добавьте нового сотрудника</p>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Имя"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $"
        />

        <button type="submit" className="btn btn-success">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
