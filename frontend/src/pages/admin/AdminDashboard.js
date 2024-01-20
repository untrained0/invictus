import React from 'react'
import Layout from './../../components/Layouts/Layout';
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
        <div>AdminDashboard</div>
    </Layout>
  )
}

export default AdminDashboard