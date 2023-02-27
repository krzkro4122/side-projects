const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
console.log("------ Airports");
console.log(airports);

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];
console.log("------ Routes");
console.log(routes);

// Graph's representation
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge (undirected graph)
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// console.log(adjacencyList);

// BFS - breadth first search
// O(V + E), V -> vertices, E -> edges, (O(N))
function bfs(start, end) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination == end) {
        console.log(`BFS found ${end}!`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}
console.log("------ BFS");
bfs("PHX", "BKK");

// DFS Depth first search - best for quickly getting info if any route between given nodes exists
// O(V + E), V -> vertices, E -> edges, (O(N))
function dfs(start, end, visited = new Set()) {
  console.log(start);
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination == end) {
      console.log(`DFS found ${end}`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, end, visited);
    }
  }
}
console.log("------ DFS");
dfs("PHX", "BKK");
