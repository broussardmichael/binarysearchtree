let binarySearchTree = require("../binarysearchtree");
let binarySearchTreeInstantiation = binarySearchTree();
let expect = require("chai").expect;

describe("Binary Search Tree Tests", function () {
    describe("Tree", function () {
       it("#createTree", function () {
            let tree = binarySearchTreeInstantiation.createTree();
            expect(tree.constructor.name).to.equal("BinarySearchTree");
       })
    });

    describe("Functions", function () {
        it("#searchNode", function(){
            let tree = binarySearchTreeInstantiation.createTree();
            tree.populateBinarySearchTree([34, 10, 3, 20, 67, 45, 30, 20, 50]);
            expect(tree.searchBinarySearchTree(34)).to.be.true;
            expect(tree.searchBinarySearchTree(100)).to.be.false;
            expect(tree.searchBinarySearchTree(20)).to.be.true;
        });
    });
})