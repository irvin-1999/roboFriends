import { useState } from "react";
import CardList from "./components/CardList";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import { robots } from "./robots";

function App() {
  const [InitRobots, setRobots] = useState(robots);
  const [searchField, setSearchField] = useState("");

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
      <CardList robots={filteredRobots} />
    </Layout>
  );
}

export default App;
