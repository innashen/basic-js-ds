const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  
  root() {
    return this.tree;
  }

  add(data) {
    
  }

  has(data) {
    
  }

  find(data) {
    
  }

  remove(data) {
   
  }

  min() {
    
    
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
