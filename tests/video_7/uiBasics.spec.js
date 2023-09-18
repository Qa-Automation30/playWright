/**
 *   The imp point is here, from where you need to run your test cases -> So you can run your test cases from 
 *   "playWright.config.js" file(This file is treated as a test runner file). All the configurations are declared here.
 */
/**
 *  Second point is that you need to write your test cases inside the tests folder. This is some Kind of rule
 */
// 1st you have to import one annotation from playWright module. So all modules are lying inside the node_modules >> @playWright/test.
// like this --> const {test} = require('@playwright/test');
// This is like JAR files like Selenium JARs
// So we are importing test annoation from PlayWright Jars
const {test} = require('@playwright/test');

// As you need to write the TC so you need to follow this kind of process or can say you have to write like this.
// so here 'test' is taking two param-> one is your 'test case name' and second one is 'function'.
test("first playWright TC",function(){


});