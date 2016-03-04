## Description

Project 4 of the Udacity Front-End Web Development Nanodegree was the optimization of Cameron Pittman’s portfolio. There were two parts to the project: 
  1. optimize the critical rendering path of the main portfolio page
  2. rewrite some JavaScript to make the pizzeria page render as quickly as possible

These optimizations should load the site quickly and provide smooth browser animations on “Cam’s Pizzeria” page. The site is best experienced using Chrome, but it has also been tested on Firefox for Mac.

### Features

To achieve [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) scores above 95 for the main page:
- Optimized images (compressed and resized for their respective pages)
- Inlined and minified CSS, including the code for Google Fonts and print styles
- Async JS requests and minified JS code

To scroll at 60 frames per second on the pizzeria page:
- Optimized code for resizing pizza images using input from a slider
- Deletion of feature measuring the difference in size, which was not useful
- Optimized for-loops that avoid recalculation of unchanging values
- Use of getElementsByClassName instead of querySelectorAll
- Use of window.PageYOffset instead of document.body.scrollTop
- Reduced number of background images generated during window scroll
- Addition of "backface-visibility:hidden" in CSS

Other features specified in the grading rubric:
- Explanatory comments in the JS file for the pizza page
- This ReadMe, which describes the site and outlines the pizza-page optimizations

### Credits

As always, I completed this project mainly by learning from others the discussion forum, so thanks to all who posted questions and answered them there. Thanks in particular to mcs, who explained the optimizations needed for the pizza-page JS.

### License

I do not own the portfolio created by Cameron Pittman, but my work on it is licensed under [GitHub’s terms of service](https://help.github.com/articles/github-terms-of-service/), meaning you can view and fork this repository.
