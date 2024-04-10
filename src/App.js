import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField, requestRobots } from "./redux/actions";
import Layout from "./components/Layout";
import Title from "./components/Title";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <Layout>
      <Title title="RoboFriends" />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? <h1>Loading...</h1> : <CardList robots={filteredRobots} />}
      </Scroll>
    </Layout>
  );
}

export default App;
