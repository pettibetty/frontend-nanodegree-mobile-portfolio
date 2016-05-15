## Website Performance Optimization portfolio project

### Getting started
Once you have clone this repository,
open index.html in a browser and to check the pageSpeed score you should use ngrok.

1. To install and how to use ngrok visit [ngrok](https://ngrok.com/docs)

### Task 1: PageSpeed Insight for index.html file
#### How did I improve the pageSpeed score?
1. I have moved the perfmatters.js into the index.html file as inline css.
2. Added asyn attribute to the analystics.js file
3. Move the inline js script to the bottom of the body tag.
4. Downloaded the images and put them in a local folder and optimized the images with grunt imagemin.
5. Added media="print" to the print.css file
6. Move the fonts link from the head to the css file with import.
7. Minified the js and css files with grunt.
8. Used grunt responsive-image to resize the images.
9. included srcset in the html file inside the img tag for the images to change according to screen size.


### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I have modified views/js/main.js until the frames per second rate is 60 fps or higher. 

#### How to view the frames per second rate?

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).



#### How did I solve, optimize the frames per second in pizza.html

1. create random pizza array outside the for loop. (line 454)
2. Creating the array outside the for loop.(line 474)
3. Moving the declaration and assignment of the variable phase outside the for loop.
4. Move document.querySelector("#movingPizzas1") outside the for loop (line 535)
5. Change querySelectorAll() to getElementsByClassName and moving var items = document.getElementsByClassName('mover') outside the function;(line 506)
6. Traversing the phase array with a for loop (line 515)
7. Setting animation to false (line 511)
8. Used innerWidth and innerHeight to print pizza images according to the screen size.

### Which plugins I have used?

1. I have used grunt Which the Gruntfile.js and the package.json are for. To learn more about [grunt](http://gruntjs.com/getting-started). Inside the Gruntfile.js, You can see which grint plugins I have used.

