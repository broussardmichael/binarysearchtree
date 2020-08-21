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

    function searchBinarySearchTree (data) {
        if(!this.root)
            throw "Tree is empty";

        return Boolean(searchNode(this.root, data));
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

    BinarySearchTree.prototype.populateBinarySearchTree = populateBinarySearchTree;

    BinarySearchTree.prototype.searchBinarySearchTree = searchBinarySearchTree;

module.exports = BinarySearchTree;