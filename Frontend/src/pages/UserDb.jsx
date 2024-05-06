import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, getCurrentUserDetail } from "../../../Backend/auth";
import "../pagesCSS/UserDB.css";
import PButton from "../components/PrimaryButton/PButton";

const UserDb = () => {
  const [login, setlogin] = useState(0);
  const [user, setUser] = useState(undefined);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    setlogin(isLoggedIn());
    setUser((prevUser) => {
      if (!prevUser) {
        const currentUser = getCurrentUserDetail();
        return currentUser;
      }
      return prevUser;
    });
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user.id, "user");
      // Function to fetch event data from backend
      const fetchEvents = async () => {
        try {
          const response = await fetch("http://localhost:3000/getUserEvents", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: user.id }),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setEventsData(data);
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      };

      // Call the fetchEvents function
      fetchEvents();
    }
  }, [user]);

  // Function to format date like "10 May 24"
  const formatDateRange = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleString("default", { month: "short" });
    const year = startDate.getFullYear().toString().substr(-2); // Get last two digits of the year
    return `${startDay} - ${endDay} ${month} ${year}`;
  };

  // Function to check if the current date falls within the event date range
  const getRegistrationStatus = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const currentDate = new Date();

    if (endDate < currentDate) {
      return "closed";
    } else if (startDate > currentDate) {
      return "soon";
    } else {
      return "now";
    }
  };
  return (
    <>
      <div className="db-wrapper">
        <div className="container">
          <div className="db-heading">
            {login ? (
              <h1>
                Hello {user.fname} , <br /> Welcome to your Dashboard
              </h1>
            ) : (
              "ERR You are not logged In"
            )}
            <Link to="/events">
              <PButton content="Book More Events" />
            </Link>
          </div>

          <div className="upcoming-events">
            {eventsData.map((event, index) => (
              <div className="card-wrapper" key={index}>
                <div className="card-body">
                  <img
                    src={`../../../src/assets/eventsImages/${event.eventImage}`}
                    alt="Event"
                    width={100}
                    height={100}
                  />
                  <h3 className="card-title">{event.eventName}</h3>
                  <p className="card-desc">{event.eventDesc}</p>
                  <p>
                    Registration :{" "}
                    {formatDateRange(event.eventStartDate, event.eventEndDate)}
                  </p>
                  {/* <p>To: {formatDate(event.eventEndDate)}</p> */}
                </div>
                <button
                  className={`card-button  cd-button ${getRegistrationStatus(
                    event.eventStartDate,
                    event.eventEndDate
                  )}`}>
                  {getRegistrationStatus(
                    event.eventStartDate,
                    event.eventEndDate
                  ) === "closed"
                    ? "Registration Closed"
                    : getRegistrationStatus(
                        event.eventStartDate,
                        event.eventEndDate
                      ) === "soon"
                    ? "Coming Soon"
                    : getRegistrationStatus(
                        event.eventStartDate,
                        event.eventEndDate
                      ) === "now"
                    ? "You have already Registered"
                    : ""}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(UserDb);
