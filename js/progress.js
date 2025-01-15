const progressKey = "progressData";

function initializeProgressData() {
  if (!localStorage.getItem(progressKey)) {
    fetch("data/progress.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(progressKey, JSON.stringify(data));
        renderProgressTable(data);
      })
      .catch((error) => console.error("Error loading progress data:", error));
  } else {
    const data = JSON.parse(localStorage.getItem(progressKey));
    renderProgressTable(data);
  }
}

function renderProgressTable(data) {
  const progressTable = document.getElementById("progressTable");
  progressTable.innerHTML = "";

  data.forEach((progress) => {
    const row = document.createElement("tr");

    Object.values(progress).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    progressTable.appendChild(row);
  });
}

function addProgress(e) {
  e.preventDefault();

  const formData = new FormData(document.getElementById("progressForm"));
  const newProgress = Object.fromEntries(formData.entries());

  const data = JSON.parse(localStorage.getItem(progressKey)) || [];
  data.push(newProgress);

  localStorage.setItem(progressKey, JSON.stringify(data));
  renderProgressTable(data);

  e.target.reset();
}

document
  .getElementById("progressForm")
  .addEventListener("submit", addProgress);

initializeProgressData();
