/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = {};
    edges.forEach((pair) => {
        let key = pair[0];
        let next = pair[1];
        if (graph[key]) graph[key].push(next);
        else graph[key] = [next];
        
        // since undirected graph(moves in both directions) create key connections to and from
        if (graph[next] && !graph[next].includes(key)) {
            graph[next].push(key)
        }
        else if (!graph[next]) {
            graph[next] = [key];
        } 
    })
    
    
    const checkPath = (vertex) => {
        if (vertex === destination) return true;
        let edges = graph[vertex]
        if (! edges) return false;
        delete graph[vertex];
        
        for (var i = 0; i < edges.length; i++) {
            let edge = edges[i]
            if (checkPath(edge) === true) return true;
        }
        return false
    }
    return checkPath(source)
};
