    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
    }

    class Node {
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    function populateBinarySearchTree (listOfIntegers) {
        if((!listOfIntegers instanceof Array))
            throw "List of integers must be an array to perform operation."
        let tree = this;
        const middleIndex = Math.floor(listOfIntegers.length / 2);
        listOfIntegers.sort(function(a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        const middleKey = listOfIntegers.splice(middleIndex, 1);
        tree.root = new Node(middleKey[0]);
        for(let i = 0; i < listOfIntegers.length;i++){
            insertNode(tree.root, listOfIntegers[i]);
        }
    }

    function findNodeInBinarySearchTree (data) {
        if(!this.root)
            throw "Tree is empty";

        return searchNode(this.root, data);
    }

    function searchNode(currentNode, data) {
        if(!currentNode)
            return null;

        if(currentNode.data === data)
            return currentNode;

        if(data < currentNode.data)
            return searchNode(currentNode.left, data);

        if(data > currentNode.data)
            return searchNode(currentNode.right, data);
    }

    function insertNode (currentNode, data) {
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

    function searchRightMost (rootNode, data){
        if(!rootNode)
            throw "Root node is required."

        let node = searchNode(rootNode, data);
        if(node)
            return searchRight(node);
        else
            throw "Node not found.";
    }

    function searchRight (currentNode) {
        if(!currentNode.right) {
            return currentNode;
        } else {
            return searchRight(currentNode.right)
        }
    }

    function deleteNode (rootNode, data) {
        if(!rootNode)
            throw "The root node is required for deletion."

        let nodeToDelete = findNodeInBinarySearchTree(data);
        let rightMostNode = searchRightMostNode(rootNode, data);
        nodeToDelete.data = rightMostNode.data;
        if(nodeToDelete.right.data === rightMostNode.data)
            nodeToDelete.right = null;

        rightMostNode.left = nodeToDelete.left
        rightMostNode = null;
        delete rightMostNode;
    }

    function isLeafNode(node) {
        return (node.right === null && node.left === null);
    }

    BinarySearchTree.prototype.populateBinarySearchTree = populateBinarySearchTree;

    BinarySearchTree.prototype.findNodeInBinarySearchTree = findNodeInBinarySearchTree;

    BinarySearchTree.prototype.insertNode = insertNode;

    Node.prototype.isLeafNode = isLeafNode;

    module.exports = BinarySearchTree;