const test = require('ava');
const findTreeLongestPathsAsync = require('../src/findTreeLongestPathsAsync');
const loadTree = require('../src/loadTree');
const TreeNode = require('../src/TreeNode');

const tree0 = loadTree(require('./data/tree0.json'));
const tree1 = loadTree(require('./data/tree1.json'));
const tree2 = loadTree(require('./data/tree2.json'));
const tree3 = loadTree(require('./data/tree3.json'));

test('find longest tree paths for tree0', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree0);
  // There is only one longest path and the only node in that path is the root node
  longestPaths.length === 1 && longestPaths[0][0].data.label === "tree0" && t.pass()
});

test('find longest tree paths for tree1', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree1);
  // There are two paths with the same length
  // if we map out the data strings of each node in the paths it will be as follows:
  const predictedPathOne = [
    "tree1",
    "tree1.b",
    "tree1.b.c",
    "tree1.b.c.b",
    "tree1.b.c.b.a",
    "tree1.b.c.b.a.b",
    "tree1.b.c.b.a.b.b",
    "tree1.b.c.b.a.b.b.a"
  ];

  const predictedPathTwo = [
    "tree1",
    "tree1.b",
    "tree1.b.c",
    "tree1.b.c.b",
    "tree1.b.c.b.a",
    "tree1.b.c.b.a.b",
    "tree1.b.c.b.a.b.b",
    "tree1.b.c.b.a.b.b.b"
  ];

  let pathStringData = [];
  for (let i = 0; i < longestPaths.length; i++) {
    const dataArray = longestPaths[i].map(node => node.data.label);
    pathStringData.push(dataArray);
  }

  let isMatching = true;
  while (isMatching) {
    predictedPathOne.forEach((datastring, idx) => {
      if (datastring === pathStringData[0][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    predictedPathTwo.forEach((datastring, idx) => {
      if (datastring === pathStringData[1][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    break;
  }

  longestPaths.length === 2 &&
  isMatching &&
  t.pass()
});

test('find longest tree paths for tree2', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree2);
  // There is only one longest path
  // if we map out the data strings of each node in the path it will be as follows:
  const predictedPath = [
    "tree1",
    "tree2.b",
    "tree2.b.c",
    "tree2.b.c.b",
    "tree2.b.c.b.a",
    "tree2.b.c.b.a.b",
    "tree2.b.c.b.a.b.a",
    "tree2.b.c.b.a.b.a.b",
    "tree2.b.c.b.a.b.a.b.a",
    "tree2.b.c.b.a.b.a.b.a.a"
  ];

  let pathStringData = [];
  for (let i = 0; i < longestPaths.length; i++) {
    const dataArray = longestPaths[i].map(node => node.data.label);
    pathStringData.push(dataArray);
  }

  let isMatching = true;
  while (isMatching) {
    predictedPath.forEach((datastring, idx) => {
      if (datastring === pathStringData[0][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    break;
  }

  longestPaths.length === 1 &&
  isMatching &&
  t.pass()
});

test('find longest tree paths for tree3', async (t) => {
  const longestPaths = await findTreeLongestPathsAsync(tree3);
  // There are four longest paths
  // if we map out the data strings of each node in the paths it will be as follows:
  const predictedPathOne = [
    "tree3",
    "tree3.b",
    "tree3.b.c",
    "tree3.b.c.b",
    "tree3.b.c.b.a",
    "tree3.b.c.b.a.a",
  ];

  const predictedPathTwo = [
    "tree3",
    "tree3.b",
    "tree3.b.c",
    "tree3.b.c.b",
    "tree3.b.c.b.a",
    "tree3.b.c.b.a.b",
  ];

  const predictedPathThree = [
    "tree3",
    "tree3.c",
    "tree3.c.c",
    "tree3.c.c.b",
    "tree3.c.c.b.a",
    "tree3.c.c.b.a.a",
  ];

  const predictedPathFour = [
    "tree3",
    "tree3.c",
    "tree3.c.c",
    "tree3.c.c.b",
    "tree3.c.c.b.a",
    "tree3.c.c.b.a.b",
  ];

  let pathStringData = [];
  for (let i = 0; i < longestPaths.length; i++) {
    const dataArray = longestPaths[i].map(node => node.data.label);
    pathStringData.push(dataArray);
  }

  let isMatching = true;
  while (isMatching) {
    predictedPathOne.forEach((datastring, idx) => {
      if (datastring === pathStringData[0][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    predictedPathTwo.forEach((datastring, idx) => {
      if (datastring === pathStringData[1][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    predictedPathThree.forEach((datastring, idx) => {
      if (datastring === pathStringData[2][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    predictedPathFour.forEach((datastring, idx) => {
      if (datastring === pathStringData[3][idx]){
        isMatching = true;
      } else {
        isMatching = false;
      }
    })

    break;
  }

  longestPaths.length === 4 &&
  isMatching &&
  t.pass()
});


