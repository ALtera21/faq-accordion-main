# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone (I ac`tually don't know how to do this yet, so i copy pasted it from chatGPT)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Here is the solution on Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Here is the live site](https://your-live-site-url.com)

## My process

Alright, here goes my second challenge i took from Frontend Mentor

1. Unlike my Single Price Grid challenge, i didn't create a layout, instead, i "go with the flow"

2. First i add the background image using img tag, then i created a container for the main content

3. like my first frontend mentor challenge, i used flex on the body so that i can move the container on the center, but the image also moved on the center of the screen.

4. I dont want that, so i used the container to make the content on the center by adding whiteBox, this way, the background image won't follow anywhere, i also added {position: fixed;}

5. When i add the mediaquery to make the mobile version, i found out that the challenge gave me another desktop backgroud for the mobile version, when i add the image, i realize that the edge of the screen does not covered by the background image, i tried to put the background image back at the body, it did coverd every edge on the screen, but it broke, the background height follows the whitebox's height, i returned back to the img tag and try to make the mobile version looked a little bit better, i add a background color similar with the color of the image background, but the image had a slight miss alignment, it's like the image had a border, so i change the tag from img to div, and it looked much better, you can try to change the div tag (.background-desktop) to img and see what i mean, if nothing happened, great! At least, it only does that on my devices.

### Built with

- no semantic, div is simpler for this one, at least for me, the only semantic is footer
- CSS
- flexbox, only used to make whitebox{justify-content: center;}
- no CSS Grid
- desktop-first workflow, breakpoint @500px
- no framework, cuz i still dont know how to used them

### What I learned

when i created the button, there was a time when the words is by default align to the center when the legnth is too wide, i don't know how to solve it, so i ask chatGPT, it worked! chatGPT taught me a lot of things in this code and i might continued to used it in the future.

There was a very stupid times when i tried to make the answer to the question opened and closed with only a single button, no matter what i thought, i can't find the solution, the code seemed alright, i tried to target the content of the answer so i used document.getElementById() and all it took is for me to add the .innerHTML for me to target the content (-_-), this is stupid indeed.

### Useful resources

- [MDN web docs](https://developer.mozilla.org/en-US/) - I think everyone should know how to use this website, it is like wikipedia made only for coding
- [getcssscan](https://getcssscan.com/css-box-shadow-examples) - i used this website to copypaste the shadow style

## Author

- Frontend Mentor - [@ALtera21](https://www.frontendmentor.io/profile/ALtera21)
- github Profile - [ALTera21](https://github.com/ALtera21)