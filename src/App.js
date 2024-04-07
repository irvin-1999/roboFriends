import { useEffect, useState } from "react";

import CardList from "./components/CardList";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import { robots } from "./robots";

function App() {
  const [InitRobots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = InitRobots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  if (robots.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Layout>
        <Title title="RoboFriends" />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {robots.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <CardList robots={filteredRobots} />
          )}
        </Scroll>
      </Layout>
    );
  }
}

export default App;
