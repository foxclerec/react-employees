import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1 className="mb-4">Учет сотрудников в компании X</h1>
      <p>Общее число сотрудников: {employees}</p>
      <p>Премию получат: {increased}</p>
    </div>
  );
};

export default AppInfo;
