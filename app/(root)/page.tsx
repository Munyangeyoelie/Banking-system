import React from "react";
import HeaderBox from "@/components/HeaderBox";
const loggedIn = { firstName: "Munyangeyo" };

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="gretting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
