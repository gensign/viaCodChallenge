const test = require('ava');
const findTreeLongestPathsAsync = require('../src/findTreeLongestPathsAsync');
const loadTree = require('../src/loadTree');

const tree0 = loadTree(require('./data/tree0.json'));
const tree1 = loadTree(require('./data/tree1.json'));
const tree2 = loadTree(require('./data/tree2.json'));
const tree3 = loadTree(require('./data/tree3.json'));

test('find longest tree paths for tree0', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree0);
  // TODO: Add some assertions
});

test('find longest tree paths for tree1', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree1);
  // TODO: Add some assertions
});

test('find longest tree paths for tree2', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree2);
  // TODO: Add some assertions
});

test('find longest tree paths for tree3', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree3);
  // TODO: Add some assertions
});
