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
// So this is a kind of first requirement to import it.
const {test} = require('@playwright/test');

// As you need to write the TC so you need to follow this kind of process or can say you have to write like this.
// so here 'test' is taking two param-> one is your 'test case name' and second one is 'function'.
// So inside that function you need to write your Automation code.
test("first playWright TC",function(){
// So inside that you can write your playWright code...
// Second Imp point is -> Java Script is Asynchronous -> What does it mean ?--> It means that in JS code will not execute in sequence.
// It means that line by line.
/**
 *  Suppose in your code there are 3 steps like this ->
 * // Step 1
 * // Step 2
 * // Step 3
 * So in JS there is no confirmation that all steps run in a sequence as it is written.
 * IN JS all steps are executed at the same time as you run the code.
 * =========================================================================================
 */

}
);