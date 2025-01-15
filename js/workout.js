const workoutKey = "workoutData";

function initializeWorkoutData() {
  if (!localStorage.getItem(workoutKey)) {
    fetch("data/workout.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(workoutKey, JSON.stringify(data));
        renderWorkoutTable(data);
      })
      .catch((error) => console.error("Error loading workout data:", error));
  } else {
    const data = JSON.parse(localStorage.getItem(workoutKey));
    renderWorkoutTable(data);
  }
}

function renderWorkoutTable(data) {
  const workoutTable = document.getElementById("workoutTable");
  workoutTable.innerHTML = "";

  data.forEach((workout) => {
    const row = document.createElement("tr");

    Object.values(workout).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    workoutTable.appendChild(row);
  });
}

initializeWorkoutData();
