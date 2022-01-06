import React from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import { useState } from "react";
import cuid from "cuid";

const events = [
  {
    id: "1",
    title: "Trip to Public Square Yerevan",
    date: "2021-03-01",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus, quaerat maxime beatae iste aut dolore perferendis consequatur officiis ullam deserunt quos quod eveniet molestiae. Expedita quae error earum. Expedita",
    city: "Yerevan, Armenia",
    venue: "Public Square of Yerevan, St Abovyan, Yerevan",
    hostedBy: "Elfond",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Elfond",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tigran",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to the Party ",
    date: "2021-03-01",
    category: "drink",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus, quaerat maxime beatae iste aut dolore perferendis consequatur officiis ullam deserunt quos quod eveniet molestiae. Expedita quae error earum. Expedita",
    city: "Yerevan, Armenia",
    venue: "Public Square of Yerevan, St Abovyan, Yerevan",
    hostedBy: "Tigran",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tigran",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Elfond",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

export default function EventDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(events);
  const [selectedEvent, setSelectEvent] = useState(null);

  // const handleIsOpenToggle = (event) => {
  //   setIsOpen(!isOpen);
  // };

  const handleCreateFormOpen = () => {
    setIsOpen(true);
    setSelectEvent(null);
  };
  const handleFormCancel = () => {
    setIsOpen(false);
  };

  const handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    setState([...state, newEvent]);
    setIsOpen(false);
  };

  const handleSelectEvent = (evt, event) => {
    setSelectEvent(event);
    setIsOpen(true);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setState(({ state }) => ({
      state: state.map((event) => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
    }));
    setIsOpen(false);
    setSelectEvent(null);
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={state} selectEvent={handleSelectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={handleUpdateEvent}
              createEvent={handleCreateEvent}
              cancelIsOpenForm={handleFormCancel}
              selectedEvent={selectedEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
