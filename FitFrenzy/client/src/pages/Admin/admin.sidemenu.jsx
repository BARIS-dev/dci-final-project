import {
  RiLogoutCircleLine,
  RiSettings2Line,
  RiDashboard2Line,
  RiAddCircleLine,
} from "react-icons/ri";
import "./admin.sidemenu.css";

const AdminSidemenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu-brand">FitFrenzy</div>
      <div className="sidemenu-items">
        <ul>
          <li>
            <a href="/dashboard">
              <RiDashboard2Line />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/create-product">
              <RiAddCircleLine />
              Add Product
            </a>
          </li>
          <li>
            <a href="/create-category">
              <RiAddCircleLine />
              New Category
            </a>
          </li>
        </ul>
      </div>
      <div className="sidemenu-footer">
        <ul className="sidemenu-footer-items">
          <li>
            <a href="/">
              <RiSettings2Line />
              Settings
            </a>
          </li>
          <li>
            <a href="/">
              <RiLogoutCircleLine />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidemenu;
