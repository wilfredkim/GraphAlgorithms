const { re } = require("semver/internal/re");

const connectedComponents = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }
  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) {
    return false;
  }
  visited.add(String(node));
  for (let neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  return true;
};
