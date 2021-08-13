// https://www.youtube.com/watch?v=PMMc4VsIacU&ab_channel=Reducible

//DFS depth first implementation 1 (recursive version)

class Vertex {
    index: number;
    neighbours: number[];

    constructor(idx: number) {
        this.index = idx
        this.neighbours = []
    }

    static build(index: number, adj: number[]): Vertex {
        const vertex = new Vertex(index)
        vertex.neighbours = adj

        return vertex
    }
}

class QueueTask  {

    constructor( public index: number, public neighbours: number[]) {
    }
}

// // vertex
// class DFS2  {
//
//     private graph: Vertex[]
//
//     // store a list to marked vertex that has been visited
//     // const visited: boolean[] = new Array(graph.length)
//     // visited.fill(false, 0, visited.length)
//
//     // mark visited[vertex.index]
//     constructor((graph: Vertex[], vertex: number)) {
//
//         this.graph = graph
//     }
//
// }

// DFS implementation 2 with stack...

class DFS2 {
    private readonly graph: Vertex[]

    constructor(graph: Vertex[]) {
        this.graph = graph
    }

    // bfs version

    public crawlGraph () {

        let visited: boolean[] = []
        // fill an array for false as tracking
        this.graph.forEach(() => visited.push(false))

        // first in the stack will be the first vertex
        let queue: QueueTask[] = [new QueueTask(0, this.graph[0].neighbours)]

        // keep running stack until the stack runs out
        while (queue.length > 0) {
            const currentTask: QueueTask | undefined = queue.pop();

            console.log(visited)

            if (currentTask) {
                // console.log(currentIndex)
                // mark current vertex as visited
                if (!visited[currentTask.index]) {
                    visited[currentTask.index] = true
                }

                for (let neighbour of currentTask.neighbours) {
                    // if unvisited, push index into stack
                    // console.log(this.graph[currentIndex].neighbours)
                    if (!visited[neighbour]) {
                        visited[neighbour] = true

                        // console.log(neighbour)
                        queue.push(new QueueTask(neighbour,[...this.graph[neighbour].neighbours]))
                    }
                }
            }
        }
    }
}

// test

const graph = [Vertex.build(0, [1 ,2]),Vertex.build(1, []), Vertex.build(2, [3 , 4]), Vertex.build(3, []), Vertex.build(4, [])]

// console.log(graph)

// there might be some logic flaws somewhere...

// how do i determine if it is marked?
// how do i determine if it is visited?
// how do i append the stack?
//

const search = new DFS2(graph)

search.crawlGraph()
