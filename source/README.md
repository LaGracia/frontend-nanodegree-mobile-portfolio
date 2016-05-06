## Description

Project 4 of the Udacity Front-End Web Development Nanodegree was the optimization of Cameron Pittman’s portfolio. There were two parts to the project:

  1. optimize the critical rendering path of the main page
  2. rewrite JavaScript for the pizzeria page to make it render faster

The optimizations should load the main page quickly and provide smooth browser animations on the pizzeria page. The site is best experienced using Chrome, but it has also been tested on Firefox for Mac.

### Features

To achieve [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) scores above 90 for the main page:
- Compressed and resized images
- Concatenated, minified and inlined CSS
- Async JS requests and minified JS

To scroll at 60 frames per second on the pizza page, as measured by Chrome's Timeline:
- Optimized JS for the resizing of pizza images using input from a slider
- Deletion of a resizing feature that was not useful
- Optimized for-loops that avoid recalculation of constant values
- Replacement of several commands:
    - `getElementsByClassName` instead of `querySelectorAll`, for efficiency
    - `window.PageYOffset` instead of `document.body.scrollTop`, for Firefox
    - `style.transform` instead of `style.left` to reposition background images
- Reduced number of background images generated during window scroll
- Addition of properties to the mover class in the CSS file

Other features required for code review:
- Explanatory comments in the JS file for the pizza page
- This ReadMe, which describes the site and lists the optimizations

### Credits

As always, I completed this project mainly by learning from others the discussion forum, so thanks to all who posted questions and answered them there. Thanks in particular to mcs for explaining the JS optimizations needed for the pizza page.