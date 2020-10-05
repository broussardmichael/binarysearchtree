let BSTModule = require("../binarysearchtree");
let expect = require("chai").expect;

describe("Binary Search Tree Tests", function () {
    describe("Functions", function () {
        it("#searchNode", function(){
            let binarySearchTree = new BSTModule();
            binarySearchTree.populateBinarySearchTree([34, 10, 3, 20, 67, 45, 30, 20, 50]);
            expect(Boolean(binarySearchTree.findNodeInBinarySearchTree(34))).to.be.true;
            expect(Boolean(binarySearchTree.findNodeInBinarySearchTree(100))).to.be.false;
            expect(Boolean(binarySearchTree.findNodeInBinarySearchTree(20))).to.be.true;
        });
    });
})