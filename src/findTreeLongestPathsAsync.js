/**
 * This function finds the leaf nodes with the greatest depth and
 * returns an array of the paths to these leaf nodes.
 *
 * For example, if the depth of the tree is 5 and there are 3 leaf nodes
 * at this depth, then this function will return an array with 3 paths
 * (each path is an array of `TreeNode`s starting from the root and ending
 * at the leaf node).
 *
 * @param {TreeNode} tree a root tree node
 * @return {Array<Array<TreeNode>>} an array whose items are arrays that
 *   represent path to each leaf node at the greatest depth
 */

 module.exports = async function findTreeLongestPathsAsync (tree) {
  // Taking care of the edgecase for a root node with no children
  const childrenOfRootNode = await tree.getChildrenAsync();
  if (childrenOfRootNode.length <= 0) {
    return [[tree]];
  }
  // Set up a map for visited nodes and their paths
  let visited = {};
  // Set up a queue for BFT
  let queue = [];
  // Enqueue the root node
  queue.push(tree);
  // Start a BFT that will keep track of visited nodes, their depths, and
  // their paths from the root node
  while(queue.length > 0) {
    const currentNode = queue.shift();
    if (
      visited[currentNode.data.depth] &&
      visited[currentNode.data.depth].length > 0
    ) {
      // We have mapped a node with the same depth
      // Determine the path to this node
      // Add current node and its path to the array of nodes at this depth
      const path = [currentNode];
      let travelledNode = currentNode;

      while (travelledNode.parent !== null) {
        path.unshift(travelledNode.parent);
        travelledNode = travelledNode.parent;
      }

      visited[currentNode.data.depth].push({
        node: currentNode,
        path: path
      });
    } else {
      // We have not mapped a node at that depth
      // Create an array to hold nodes and their paths
      const path = [currentNode];
      let travelledNode = currentNode;

      while (travelledNode.parent !== null) {
        path.unshift(travelledNode.parent);
        travelledNode = travelledNode.parent;
      }

      visited[currentNode.data.depth] = [{
        node: currentNode,
        path: path
      }]
    }
    // Get the children of the current node
    const childrenOfCurrentNode = await currentNode.getChildrenAsync();
    if (childrenOfCurrentNode && childrenOfCurrentNode.length > 0) {
      // Current node has children so we enqueue them
      for(const child of childrenOfCurrentNode) {
        queue.push(child);
      }
    }
  }
  // Traversal should be finished and the visited map should have
  // arrays of nodes at each depth. And because we did this as a BFT
  // the last key in the array should be the lowest depth
  const listOfDepths = Object.keys(visited);
  const deepestNodes = visited[listOfDepths[listOfDepths.length - 1]];
  const listOfPaths = deepestNodes.map(node => node.path)
  return listOfPaths
};
