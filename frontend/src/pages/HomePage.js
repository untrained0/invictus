import React from "react";
// import { useAuth } from "../context/auth";
import Layout from './../components/Layouts/Layout';
import YtVideos from '../components/Layouts/YtVideos'


const HomePage = () => {
  // const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>HomePagr</h1>
      <YtVideos />
    </Layout>
  );
};

export default HomePage;