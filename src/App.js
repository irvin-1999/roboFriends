import Card from "./components/Card";
import SearchBox from "./components/SearchBox";
import Title from "./components/Title";
import { robots } from "./robots";

function App() {
  const cardArray = robots.map((robot) => {
    return (
      <>
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      </>
    );
  });

  return (
    <>
      <Title title="RoboFriends" />
      <SearchBox />
      {cardArray}
    </>
  );
}

export default App;
