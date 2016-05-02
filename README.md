## Description

Project 4 of the Udacity Front-End Web Development Nanodegree was website optimization. In addition, we used build tools to automate some of the tasks involved, such as image compression. This process results in two versions of every file:

1. The source folder contains the work-in-progress version for the developer
2. The build folder contains the optimized version for generating the actual site

I used the task runner [Grunt](http://gruntjs.com/) to automate the optimization of CSS, JS and PNG files needed for the site. (Every available plugin for optimizing JPEGs gave me installation errors, so I compressed those images manually.)

### Build tools

To generate build files from the files in the source folder:
- Install [Node and NPM](https://nodejs.org/en/)
- Install the Grunt [plugins](http://gruntjs.com/plugins) listed in package.json
- Enter "grunt" in the Terminal

Only the main page and the pizzeria page needed to be optimized for the project. The site can be viewed on [GitHub Pages](http://lagracia.github.io/frontend-nanodegree-mobile-portfolio/).

### Project details

A list of all the optimizations I made can be found in the second [ReadMe](https://github.com/LaGracia/frontend-nanodegree-mobile-portfolio/tree/master/source) inside the source folder. I separated it to keep this one from becoming too long.

### Credits

As always, I completed this project mainly by learning from others the Udacity discussion forum, so thanks to all who posted questions and answered them there. Thanks in particular to andrew_R and Susan for their instructions on how to work with source and build files.

I followed Chris Coyier's excellent explanation on [24ways.org](https://24ways.org/2013/grunt-is-not-weird-and-hard/) for how to install, configure and use Grunt. Thanks also to David Bulté for his helpful instructions on [Stack Overflow](http://stackoverflow.com/questions/20337819/change-link-or-script-filename-in-html-after-gruntjs-minify-uglify) for how to use the string-replace plugin.

### License

I do not own the portfolio created by Cameron Pittman, but my work on it is licensed under [GitHub’s terms of service](https://help.github.com/articles/github-terms-of-service/), meaning you can view and fork this repository.