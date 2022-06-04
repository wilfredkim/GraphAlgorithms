const { re } = require("semver/internal/re");

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  console.log(graph);
  return hasPathUsingBFs(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let current of graph[src]) {
    if (hasPath(graph, current, dest, visited)) {
      return true;
    }
  }
  return false;
};
const hasPathUsingBFs = (graph, src, dest, visited) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;
    if (visited.has(current)) return false;
    visited.add(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

if (undirectedPath(edges, "j", "m")) {
  console.log("true");
} else {
  console.log("false");
}
