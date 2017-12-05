const assert = require('assert');
var itunesCrawler = require("../itunesCrawler.js");

it("should extract the headline",function(){
    return itunesCrawler.grapHeadline("asdfsdfsdf\ndsds<h1>myHeadline ä ö ü ß</h1> asasasas \nsasas").then(headline => {
        assert.equal(headline,"myHeadline ä ö ü ß");
    });
});

it("should reject as no headline is specified",function(){
 itunesCrawler.grapHeadline("asdfsdfsdf").then(
    function fulfilled(result) {
        throw new Error('Promise was unexpectedly fulfilled. Result: ' + result);
    }, 
    function rejected(error) {
        assert(true);
    });
});


it("should extract the author",function(){
    return itunesCrawler.grapAuthor("asdfsdfsdf\ndsds<h2>By a demo Prof</h2>").then(author => {
       assert.equal(author,"a demo Prof"); 
    });
});


it("should reject as no author is specified",function(){
 itunesCrawler.grapAuthor("asdfsdfsdf").then(
    function fulfilled(result) {
        throw new Error('Promise was unexpectedly fulfilled. Result: ' + result);
    }, 
    function rejected(error) {
        assert(true);
    });
});

