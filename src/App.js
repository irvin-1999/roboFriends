import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./redux/reducers";
import thunkMiddleware from "redux-thunk";
import CardList from "./components/CardList";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import { robots } from "./robots";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
  const [InitRobots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setRobots(users));
  // }, []);

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
