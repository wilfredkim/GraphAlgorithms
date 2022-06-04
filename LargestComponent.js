const { re } = require("semver/internal/re");

const largestComponent = (graph) => {
  const visited = new Set();
  let largestValue = 0;

  for (let node in graph) {
    const current = exploreSize(graph, node, visited);
    if (current > largestValue) {
      largestValue = current;
    }
  }
  return largestValue;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) {
    return 0;
  }
  let size = 1;
  visited.add(node);

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

const graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};
const values = largestComponent(graph);
console.log(values);
