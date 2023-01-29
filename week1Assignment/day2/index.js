let tableContainer = document.getElementById("table-container");
// console.log(tableContainer);

let headderList = ["Movie Name", "Release Year", "Type"];

let movieList = [
  {
    movieName: "Dumbo",
    releaseYear: 1941,
    type: "fantasy",
  },
  {
    movieName: "The Little Mermaid",
    releaseYear: 1981,
    type: "Adventure",
  },
  {
    movieName: "The Lion King",
    releaseYear: 1994,
    type: "fantasy",
  },
  {
    movieName: "Toy Story",
    releaseYear: 1995,
    type: "Adventure",
  },
  {
    movieName: "Pirates of the Caribbean",
    releaseYear: 2003,
    type: "Mystery",
  },
];

let table = document.createElement("table");
tableContainer.appendChild(table);

function createHeadder() {
  let tr = document.createElement("tr");
  for (let i = 0; i < headderList.length; i++) {
    let th = document.createElement("th");
    th.textContent = headderList[i];
    th.classList.add("table-headder");
    tr.appendChild(th);
  }

  table.appendChild(tr);
}

createHeadder();

function createData() {
  for (let i = 0; i < movieList.length; i++) {
    let tr = document.createElement("tr");
    for (let key in movieList[i]) {
      let td = document.createElement("td");
      td.textContent = movieList[i][key];
      td.classList.add("table-data");
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

createData();
