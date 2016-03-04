## Description

Project 4 involved optimizing a hypothetical portfolio for speed. There were two parts to the project: first, optimize the critical rendering path of the main index page; second, rewrite some JavaScript so that the pizzeria page will render as quickly as possible. These modifications are aimed at improving user experience on the site.

### Features

To achieve PageSpeed Insights scores above 90:
- Optimized images (compressed and resized for their respective pages)
- Inlined CSS and minified JSS
- Async JavaScript requests 
To achieve 60 frames per second on page scroll:
- Use of getElementsByClassName instead of querySelectorAll

### Credits

As always, I completed this project mainly by learning from others the discussion forum, so thanks to everyone who posted questions and answered them there. Thanks in particular to mcs, who explained the JS to optimize step by step.

### License

I do not own the portfolio created by Cameron Pittman, but my optimization work on it is licensed under [GitHub’s terms of service](https://help.github.com/articles/github-terms-of-service/), meaning you can view and fork this repository.
