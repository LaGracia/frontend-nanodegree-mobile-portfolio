## Description

Project 4 of the Udacity Front-End Web Development Nanodegree was the optimization of Cameron Pittman’s portfolio. There were three parts to the project: 
  1. optimize the critical rendering path of the main page
  2. rewrite JavaScript for the pizzeria page to make it render faster
  3. use build tools to automate optimization and other tasks

The optimizations should load the site quickly and provide smooth browser animations on the pizzeria page. The site is best experienced using Chrome, but it has also been tested on Firefox for Mac.

Build tools automate optimization tasks such as image compression and code minification. This process takes files from the development folder and saves the optimized versions in the production folder.

### Features

#### Optimized critical rendering path
To achieve [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) scores above 95 for the main page:
- Compressed and resized images
- Concatenated, minified and inlined CSS
- Async JS requests and minified JS

#### Smooth animations
To scroll at 60 frames per second on the pizza page:
- Optimized JS for resizing pizza images using input from a slider
- Deletion of a resizing feature that was not useful
- Optimized for-loops that avoid recalculation of constant values
- Replacement of several commands:
    - getElementsByClassName instead of querySelectorAll, for efficiency
    - window.PageYOffset instead of document.body.scrollTop, for Firefox
    - style.transform instead of style.left to reposition background images
- Reduced number of background images generated during window scroll
- Addition of properties to the mover class in the CSS file

#### Output of build tools
[Grunt](http://gruntjs.com/) was used to create optimized versions of the following file types:
- PNG images (I had trouble with JPEG optimization, so that was done manually)
- CSS (concatenated and minified or inlined)
- JavaScript (minified)

#### Other features required for code review
- Development and production files in separate directories
- Explanatory comments in the JS file for the pizza page
- This ReadMe, which describes the site and lists the optimizations

### Credits

As always, I completed this project mainly by learning from others the discussion forum, so thanks to all who posted questions and answered them there. Thanks in particular to mcs, who explained the JS optimizations needed for the pizza page.

### License

I do not own the portfolio created by Cameron Pittman, but my work on it is licensed under [GitHub’s terms of service](https://help.github.com/articles/github-terms-of-service/), meaning you can view and fork this repository.
