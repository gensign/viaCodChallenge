# Tree Height (Asynchronous)

## Overview

The goal of this exercise is to test your understanding of a simple tree
data structure and methods for traversing and analyzing trees.
To make the problem a little more challenging, the provided `TreeNode`
implementation provides only an asynchronous function for fetching
children of a `TreeNode`. The `getChildrenAsync()` of `TreeNode` returns
a promise that is resolved after a random time period.

## Instructions

This exercise will require you to implement the following functions:

- `src/loadTree.js`: This function is used convert parsed data from a JSON
  file into a tree. The returned tree should be the root `TreeNode` of
  the given tree.

- `src/findTreeLongestPathsAsync.js`: This function is used to find
  the paths of the longest length for a tree. The function should return an
  array of paths with each path starting from the root `TreeNode` and
  ending at the leaf `TreeNode`. NOTE: It is possible for a tree to
  have multiple paths of the same length.

- `test/findTreeLongestPathsAsync.test.js`: Implement the stub test cases
  and add more to verify the functionality of methods that you implemented.

If you find any errors in the provided code then please fix these errors
and add test cases to help us understand the change. If the instructions
are not clear then feel free to make some assumptions but provide
documentation on why you made these assumptions.

While optimizing the solution is not the main focus, please feel
free to document any optimizations that you made or thought about
during the course of this exercise.

## Submitting

Once you have completed this programming exercise, create a zip file
of your solution and be sure to include the `.git` directory so that
we can easily see the changes that you made.

Email the zip file to us.
