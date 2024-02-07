import "./admin.dashboard.css";
import AdminSidemenu from "./admin.sidemenu.jsx";
import ProductCreate from "./product.create.jsx";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-dashboard">
        <AdminSidemenu />
        <div className="admin-dashboard-container">
          <h2>Admin Dashboard</h2>
          <div className="admin-cp-content">
            <ProductCreate />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
