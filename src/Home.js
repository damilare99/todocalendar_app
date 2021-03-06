import React from "react";
import styles from "./Styles/Home.module.css";
import Nav from "./components/Nav";
import CalendarComp from "./components/CalendarComp";
import Store from "./globalState/Store";
import FilteredEvents from "./globalState/filteredEvents";

const Home = () => {
  return (
    <Store>
      <FilteredEvents>
        <div className={styles.main_container}>
          <Nav />
          <CalendarComp />
        </div>
      </FilteredEvents>
    </Store>
  );
};

export default Home;
