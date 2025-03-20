import Link from "next/link";

export default function DashboardLayout({ users, analytics, features }) {
  return (
    <div className="dashboard-container">
      <div className="content">
        <h2>Dashboard Overview</h2>
        <div className="sections">
          <div className="section">{users}</div>
          <div className="section">{analytics}</div>
          <div className="section">{features}</div>
        </div>
      </div>
    </div>
  );
}
