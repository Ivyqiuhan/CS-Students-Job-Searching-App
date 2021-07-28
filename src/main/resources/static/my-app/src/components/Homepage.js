import "./Homepage.css";
import React from "react";
import RegisteredSearch from './queries/RegisteredSearch';
import AnonymousSearch from './queries/AnonymousSearch';

const Home = () => {
  return (
    <div className="Homepage">
      <AnonymousSearch />
    </div>
  );
}

export default Home;
