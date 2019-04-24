"use strict";
var Node = require('./Node');

var NonDocumentTypeChildNode = {

  nextElementSibling: { get: function() {
    if (this.parentNode) {
      for (var kid = this.nextSibling; kid !== null; kid = kid.nextSibling) {
        if (kid.nodeType === Node.ELEMENT_NODE) return kid;
      }
    }
    return null;
  }, configurable: true},

  previousElementSibling: { get: function() {
    if (this.parentNode) {
      for (var kid = this.previousSibling; kid !== null; kid = kid.previousSibling) {
        if (kid.nodeType === Node.ELEMENT_NODE) return kid;
      }
    }
    return null;
  }, configurable: true}

};

module.exports = NonDocumentTypeChildNode;
