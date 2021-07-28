import "./Homepage.css";
import React from "react";
import AnonymousSearch from './queries/AnonymousSearch';
import Jobs from "./jobs/Jobs";

const Home = () => {
  return (
    <div className="Homepage">
      <AnonymousSearch />
    </div>
  );
}

export default Home;
