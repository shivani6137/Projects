import React from 'react';

const Dashboard = () => {

  return (
    <div className="admin-dashboard-container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="stats">
        <div className="stat-card total-orders">
          <h3>Total Orders</h3>
          <p>245</p>
        </div>
        <div className="stat-card revenue">
          <h3>Revenue</h3>
          <p>$3456</p>
        </div>
        <div className="stat-card customers">
          <h3>Customers</h3>
          <p>120</p>
        </div>
        <div className="stat-card products">
          <h3>Products</h3>
          <p>50</p>
        </div>
      </div>
      <div className="recent-orders">
        <h3>Recent Orders</h3>
        <ul>
          <li>#1234 - John Doe - $50</li>
          <li>#1235 - Jane Smith - $30</li>
          <li>#1236 - Alex Johnson - $25</li>
          <li>#1237 - Sarah Wilson - $40</li>
          <li>#1238 - David Brown - $60</li>
        </ul>
      </div>
      <div className="sales-chart">
        <h3>Sales Chart</h3>
        {/* Insert chart component here */}
      </div>
    </div>
  );
};

export default Dashboard;
