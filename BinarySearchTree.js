module.exports = (function () {
    let binarySearchTree = {};

    class Node {
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
            this.populateBinarySearchTree = populateBinarySearchTree;
            this.searchBinarySearchTree = searchBinarySearchTree;
        }
    }

    binarySearchTree.createTree = function () {
        let tree = new BinarySearchTree();

        return tree;
    }

    let populateBinarySearchTree = function (listOfIntegers) {
        if((!listOfIntegers instanceof Array))
            throw "List of integers must be an array to perform operation."
        let tree = this;
        for(let i = 0; i < listOfIntegers.length;i++){
            if(!tree.root) {
                tree.root = new Node(listOfIntegers[i]);
            } else {
                insertNode(tree.root, listOfIntegers[i]);
            }
        }
    }

    let searchBinarySearchTree = function (data) {
        if(!this.root)
            throw "Tree is empty";

        return Boolean(searchNode(this.root, data));
    }

    let searchNode = function (currentNode, data) {
        if(!currentNode)
            return null;

        if(currentNode.data === data)
            return currentNode;

        if(data < currentNode.data)
            return searchNode(currentNode.left, data);

        if(data > currentNode.data)
            return searchNode(currentNode.right, data);
    }

    let insertNode = function (currentNode, data) {
        if(data > currentNode.data) {
            if(!currentNode.right) {
                currentNode.right = new Node(data);
            } else {
                insertNode(currentNode.right, data);
            }
        } else if(data < currentNode.data) {
            if(!currentNode.left) {
                currentNode.left = new Node(data);
            } else {
                insertNode(currentNode.left, data);
            }
        }
    }

    return binarySearchTree;
});
