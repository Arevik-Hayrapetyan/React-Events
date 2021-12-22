import { Container } from "semantic-ui-react";
import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import NavBar from "./features/nav/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
