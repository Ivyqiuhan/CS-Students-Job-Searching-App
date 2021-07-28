import "./Homepage.css";
import React from "react";
import RegisteredSearch from './queries/RegisteredSearch';
import AnonymousSearch from './queries/AnonymousSearch';

const Home = () => {
  return (
    <div className="Homepage">
      <RegisteredSearch />
    </div>
  );
}

export default Home;
