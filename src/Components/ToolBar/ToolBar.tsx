import { NavLink } from 'react-router-dom';


const ToolBar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <span className="navbar-brand mb-0 h1 text-white fs-1">Fields</span>
        </div>
        <div className="ms-auto">
          <nav className="navbar navbar-nav row">
            <li>
              <NavLink to="/" className="text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white">About</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="text-white">Contacts</NavLink>
            </li>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default ToolBar;