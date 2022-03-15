import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-outline-light btn-sm active" type="button">
        Все сотрудники
      </button>
      <button className="btn btn-outline-light btn-sm" type="button">
        На повышение
      </button>
      <button className="btn btn-outline-light btn-sm" type="button">
        З/П выше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
