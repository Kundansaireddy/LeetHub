import React from "react";
import Card from "./components/Card";
import styles from "./App.module.css";
import Header from "./components/Header";
import img1 from "./images/leetmate.png";
import img2 from "./images/leetgraph.png";
import img3 from "./images/leetcompare.png";
const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card
          image={img1}
          name="LeetMate"
          description="Compare the recently solved 20 Problems"
          href="https://leet-mate-ksr.vercel.app/"
        />
        <Card
          image={img2}
          name="LeetGraph"
          description="Compare all ratings from the Contests"
          href="https://leet-graphs-ksr.vercel.app/"
        />
        <Card
          image={img3}
          name="LeetCompare"
          description="Compare based on Total Problems solved"
          href="https://leet-compare-ksr.vercel.app/"
        />
      </div>
    </>
  );
};

export default App;
