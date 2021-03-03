//Stored via an adjecency List

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    Object.keys(this.adjacencyList).forEach((v) => {
      this.removeEdge(v, vertex);
    });

    delete this.adjacencyList[vertex];
  }
}

let gr = new Graph();
gr.addVertex("Mumbai");
gr.addVertex("Delhi");
gr.addVertex("Goa");
gr.addVertex("Manali");

console.log(gr);

gr.addEdge("Mumbai", "Delhi");
gr.addEdge("Goa", "Delhi");
gr.addEdge("Mumbai", "Goa");
gr.addEdge("Mumbai", "Manali");
gr.addEdge("Manali", "Goa");
console.log(gr);

gr.removeEdge("Mumbai", "Goa");
console.log(gr);

gr.removeVertex("Manali");
console.log(gr);
