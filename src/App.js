import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import HomePage from "./features/home/HomePage";
import UserDetailedPage from "./features/user/UserDetailed/UserDetailedPage";
import EventForm from "./features/event/EventForm/EventForm";
import NavBar from "./features/nav/NavBar/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/events" element={<EventDashboard />} />
          <Route path="/profile/:id" element={<UserDetailedPage />} />
          <Route path="/createEvent" element={<EventForm />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
