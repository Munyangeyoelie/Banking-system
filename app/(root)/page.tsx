import React from "react";
import HeaderBox from "@/components/HeaderBox";
const loggedIn = { firstName: "Munyangeyo" };

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently."
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
