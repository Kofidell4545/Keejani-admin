import React, { useState, useEffect } from "react";
import api from "../../config/axios";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { MdArrowForward } from "react-icons/md";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { testAuth } from "../../services/auth";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        await testAuth(); // Test authentication
        fetchDashboardData(); // Only fetch after successful auth
      } catch (err) {
        console.error("Authentication failed:", err);
        setError("Authentication failed");
      }
    };

    init();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/admin/dashboard", {
        params: {
          id: "admin",
        },
      });

      console.log("Dashboard Data:", response.data);
      setDashboardData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch dashboard data");
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="date-range">Loading...</div>
        </div>
        <div className="loading-state">Loading dashboard data...</div>
      </div>
    );

  if (error)
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="error-state">Error: {error}</div>
      </div>
    );

  // Get current date range
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const dateRange = `${format(monthStart, "MMM dd")} - ${format(
    monthEnd,
    "MMM dd, yyyy"
  )}`;

  // Mock data for the stats cards
  const statsData = [
    {
      title: "Revenue",
      value: "$7,825",
      change: "+22%",
      trend: "up",
      color: "#FFA500",
    },
    {
      title: "Orders",
      value: "920",
      change: "-25%",
      trend: "down",
      color: "#FF0000",
    },
    {
      title: "Visitors",
      value: "15.5K",
      change: "+49%",
      trend: "up",
      color: "#00FF00",
    },
    {
      title: "Visitors",
      value: "15.5K",
      change: "+49%",
      trend: "up",
      color: "#00FF00",
    },
  ];

  // Mock data for bar chart
  const barData = Array.from({ length: 14 }, (_, i) => ({
    date: (i + 20).toString(),
    value: Math.floor(Math.random() * 8000) + 1000,
  }));

  // Mock data for pie chart
  const pieData = [
    { value: 30, color: "#FF0000" },
    { value: 25, color: "#FFA500" },
    { value: 25, color: "#0088FE" },
    { value: 20, color: "#00C4FF" },
  ];

  // Mock data for traffic chart
  const trafficData = Array.from({ length: 10 }, (_, i) => ({
    name: i,
    value: Math.floor(Math.random() * 2000) + 500,
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="date-range">{dateRange}</div>
      </div>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-header">
              <span>{stat.title}</span>
              <span className={`stat-change ${stat.trend}`}>{stat.change}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <LineChart width={100} height={30} data={trafficData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={stat.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-header">
            <h2>Dashboard</h2>
            <button className="advanced-btn">
              Advanced Report <MdArrowForward />
            </button>
          </div>
          <BarChart width={800} height={300} data={barData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Bar dataKey="value" fill="#FFA500" />
          </BarChart>
        </div>

        <div className="chart-container cart-section">
          <div className="chart-header">
            <h2>Cart</h2>
          </div>
          <div className="percentage-indicator">
            <span>38%</span>
          </div>
          <div className="cart-stats">
            <div className="cart-stat">
              <span>Adandoned Cart</span>
              <span>720</span>
            </div>
            <div className="cart-stat">
              <span>Adandoned Revenue</span>
              <span>$5,900</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-charts">
        <div className="chart-container">
          <div className="chart-header">
            <h2>Revenue by device</h2>
            <button className="more-btn">
              More <MdArrowForward />
            </button>
          </div>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h2>Traffic</h2>
            <button className="more-btn">
              More <MdArrowForward />
            </button>
          </div>
          <div className="traffic-stats">
            <div className="traffic-stat">
              <span>Store Visits</span>
              <div>
                <span>8950</span>
                <span className="change positive">+22%</span>
              </div>
            </div>
            <div className="traffic-stat">
              <span>Visitors</span>
              <div>
                <span>1520</span>
                <span className="change negative">-24%</span>
              </div>
            </div>
          </div>
          <LineChart width={500} height={200} data={trafficData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FFA500"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
