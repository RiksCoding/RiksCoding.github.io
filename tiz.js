// Array of event objects with a name and a target date (YYYY-MM-DD)
const events = [
    {
      name: "Caravan Holiday",
      date: "2025-04-21"
    },
    {
      name: "Back to School",
      date: "2025-04-28"
    },
    {
      name: "School Trip",
      date: "2025-06-06"
    },
    {
      name: "Something Else",
      date: "2025-04-12"
    }
  ];
  
  // Calculate the number of days left until the event date
  function getDaysLeft(eventDate) {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    // Calculate the time difference in milliseconds
    const timeDiff = eventDateObj - currentDate;
    // Convert milliseconds to days
    if (timeDiff != 0){
      return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    }else {
      return 0;
    }
  }
  
  // Sort events by the shortest remaining days first
  events.sort((a, b) => getDaysLeft(a.date) - getDaysLeft(b.date));
  
  // Render the timers on the page
  function updateTimers() {
    const container = document.getElementById("timerContainer");
    container.innerHTML = ""; // Clear previous timers
    events.forEach(event => {
        const days = getDaysLeft(event.date);

        if (days >= 0) { // Show only events that are today or in the future
            const eventDiv = document.createElement("div");
            eventDiv.className = "timer";
            eventDiv.innerHTML = `
                <div class="event-name">${event.name}</div>
                <div class="days-left">${days === 0 ? "Today!" : days}</div>
                <div class="small-text">${days === 1 ? "day" : days === 0 ? "" : "days"}</div>
            `;
            container.appendChild(eventDiv);
        }
    });
}
  
  // Initial display of timers
  updateTimers();
  
  // Refresh timers every minute
  setInterval(updateTimers, 60000);
