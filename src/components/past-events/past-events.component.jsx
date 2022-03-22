import React from "react";
import configureAndFilterEvents from "../../services/util-functions/events/configure-and-filter-events";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const PastEvents = ({ events, handleImportant, deleteEvent }) => {
  const filterdEvents = configureAndFilterEvents(
    events,
    (data) => !data.upcoming
  );

  const columns = [
    {
      key: "important",
      content: (event) => (
        <Important
          onClick={() =>
            alert(
              "Can not update any properties of the event that are past their specified time"
            )
          }
          isImportant={event.isImportant}
        />
      ),
    },
    { path: "name", label: "Event" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "delete",
      content: (event) => (
        <button onClick={() => deleteEvent(event)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="important-event-table">
      <div className="event-title">past events</div>
      {filterdEvents.length !== 0 ? (
        <Table columns={columns} data={filterdEvents} />
      ) : (
        <span>No events found in the current list</span>
      )}
    </div>
  );
};

export default PastEvents;
