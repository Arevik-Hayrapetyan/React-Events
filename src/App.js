import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import HomePage from "./features/home/HomePage";
import EventDetailedPage from "./features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "./features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./features/user/Settings/SettingsDashboard";
import EventForm from "./features/event/EventForm/EventForm";

import NavBar from "./features/nav/NavBar/NavBar";
// import { Switch } from "react-router";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventDashboard />} />
          <Route path="/events/:id" element={<EventDetailedPage />} />
          <Route path="/people" element={<PeopleDashboard />} />
          <Route path="/profile/:id" element={<UserDetailedPage />} />
          <Route path="/settings" element={<SettingsDashboard />} />
          <Route path="/createEvent" element={<EventForm />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
