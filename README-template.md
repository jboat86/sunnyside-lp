# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge
Hello, everyone. My name is jennifer and i am an Aspiring front-end web developer. To push myself further, i have decided to take on an even bigger challenge to develop a whole landing page, as opposed to website components such as modals etc.

The aim of this challenge is to develop a landing page and get it looking close to the design as much as possible!

Once the website is complete, users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Bootstrap 5
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

center text (as used in this project):

```css
.text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
}
```

A more simpler way of centering text:

```css
.text {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
```
centering an img such as the arrow seen on the hero page: 
```css
.arrow {
  position: absolute;
  padding-top: 5.75em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  height: 35%;
}
```
i had to experiment with `transform: translate(-50%, -20%);` to ensure the arrow is in the position as shown in the design file. Although the arrow is meant to be centered using the absolute values of `top: 50%;` and `left: 50%;`, it was not in the center so i had to use the transform property to position it correctly.

/* .contact {
  
  width: 50px;
  border-radius: 60px;
  padding: 0 0.75em;
  border: none;
  margin: 0 auto;
  text-transform: uppercase;
  font-family: "Fraunces", serif;
  color: var(--very-dark-grayish-blue);
} */

/* .nav-link {
  color: var(--dark-grayish-blue);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem 0;
} */

/* .hero-mobile{
background-image: url("/assets/images/mobile/image-header.jpg");
background-color: var(--yellow); 
} */
/* Used if the image is unavailable */


/* .hero-title {
  font-family: "Fraunces", serif;
  color: var(--white);
  padding-top: 0.5em;
  font-weight: 700;
  letter-spacing: 0.5rem;
  font-size: clamp(2rem, 1rem + 10vw, 5rem);
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
} */

/* .arrow {
  position: absolute;
  padding-top: 3.75em;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -20%);
  height: 35%;
} */

### Continued development

Areas of improvement include:
improiving webpage responsiveness across all screen sizes

### Useful resources

- [Conquering responsive layouts by Kevin Powell](https://courses.kevinpowell.co) - This course helped me gain an breadth of understanding in building responsive layouts using CSS grid and flexbox.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)



## Acknowledgments

I would like to thank the CSS evalgelist, Kevin Powell, for explaining CSS grid and flexbox in greater depth via his conqueing responsive layouts course and countless helpful Youtube videos. 
