import "./Dashboard.css";
import Layout from "../../component/layout/Layout";
import Add from "../../component/add/Add";

const Dashboard = ({ children }) => {
  return (
    <Layout className="dashboard">
      <div className="dashboard">
        <Add title={"Student"} />
        <Add title={"Teacher"} />
      </div>
    </Layout>
  );
};

export default Dashboard;
