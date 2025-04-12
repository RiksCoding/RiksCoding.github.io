// Array of event objects with a name and a target date (YYYY-MM-DD)
const events = [
    {
      name: "Caravan Holday",
      date: "2025-04-21"
    },
    {
      name: "Back to School",
      date: "2025-04-28"
    },
    {
      name: "School Trip",
      date: "2025-06-06"
    }
  ];
  
  // Calculate the number of days left until the event date
  function getDaysLeft(eventDate) {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    // Calculate the time difference in milliseconds
    const timeDiff = eventDateObj - currentDate;
    // Convert milliseconds to days
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }
  
  // Sort events by the shortest remaining days first
  events.sort((a, b) => getDaysLeft(a.date) - getDaysLeft(b.date));
  
  // Render the timers on the page
  function updateTimers() {
    const container = document.getElementById("timerContainer");
    container.innerHTML = ""; // Clear previous timers
    events.forEach(event => {
      const days = getDaysLeft(event.date);
      const eventDiv = document.createElement("div");
      eventDiv.className = "timer";
      eventDiv.innerHTML = `
        <div class="event-name">${event.name}</div>
        <div class="days-left">${days}</div>
        <div class="small-text">days</div>
      `;
      container.appendChild(eventDiv);
    });
  }
  
  // Initial display of timers
  updateTimers();
  
  // Refresh timers every minute
  setInterval(updateTimers, 60000);