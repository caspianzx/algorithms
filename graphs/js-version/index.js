
const airports = 'SG MY BKK JP KR ID YO'.split(' ')

// Adjacency list
const routes = [
    ["SG", "MY"],
    ["SG", "BKK"],
    ["BKK", "JP"],
    ["BKK", "KR"],
    ["BKK", "ID"],
    ["SG", "KR"],
    ["MY", "BKK"]
]

// the graph

const adjacentList = new Map()

const addNode = (airport) => {
    adjacentList.set(airport, [])
}

// add undirected edge
const addEdge = (origin, destination) => {
    adjacentList.get(origin).push(destination)
    adjacentList.get(destination).push(origin)
}

// create graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

// console.log(adjacentList)
// goes through every edge that a node has first
const bfs = (start) => {
    const visited = new Set()

    // this is an arr of str
    const queue = [start]

    while (queue.length > 0) {

        const airport = queue.shift() // mutates the queue
        const destinations = adjacentList.get(airport);

        for (const destination of destinations) {

            if (destination === 'BKK') {
                console.log('found u')
            }

            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }
}

// bfs('MY')

// does from one edge to another first
const dfs = (start, visited = new Set()) => {
    console.log(start)

    visited.add(start)

    const destinations = adjacentList.get(start);

    for (const destination of destinations) {
        if (destination === 'KR') {
            console.log(`DFS found KR in ${visited.size} steps`)
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited)
        }
    }
}

// dfs('KR')