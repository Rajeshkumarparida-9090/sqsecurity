import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserList from "../pages/user/UserList";

const PublicRoute = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    
  );
};
export default PublicRoute;
            