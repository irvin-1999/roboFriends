import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import { robots } from "./robots";

function App() {
  const [InitRobots, setRobots] = useState(robots);
  const [searchField, setSearchField] = useState("");

  // useEffect(async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = res.json();
  //   return data;
  // }, []);

  const filteredRobots = InitRobots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  };

  return (
    <Layout>
      <Title title="RoboFriends" />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </Layout>
  );
}

export default App;
