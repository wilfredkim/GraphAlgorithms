const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["b"],
  f: ["d"],
};

const depthFirstSearchPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const breathFirstSearchPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

depthFirstSearchPrint(graph, "a");
breathFirstSearchPrint(graph, "a");
