/**
 * This function is used to load data that was read from file and
 * parsed as JSON.
 * See `./test/data/tree1.json` for example input data.
 *
 * @param  {Object} obj an object that stores tree data
 * @return {TreeNode} the root `TreeNode`
 */
import TreeNode from "./TreeNode";

module.exports = function loadTree(obj) {
  const rootNode = new TreeNode(null, {
    label: obj.data,
    depth: 0,
    childArray: obj.children
  });
  function recursiveLoad(parent, childArray){
    if (!childArray){
      return;
    }
    const newChildren = [];
    for (const child of childArray) {
      const childNode = new TreeNode(parent, {
        label: child.data,
        depth: parent.data.depth + 1,
        childArray: child.children
      });
      newChildren.push(childNode);
      parent.setChildren(childNode);
    }
    for (const childNode of newChildren) {
      if (!childNode.data.childArray || childNode.data.childArray.length <= 0) {
        continue;
      } else {
        recursiveLoad(childNode, childNode.data.childArray);
      }
    }
  };

  recursiveLoad(rootNode, obj.children);

  return rootNode;
};