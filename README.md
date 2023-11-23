# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content (I didn't bother with this part - it's not what I'm trying to focus on)

### Screenshots

![Desktop](./public/assets/images/Desktop%20screenshot.png)
![Mobile](./public/assets/images/Mobile%20screenshot.png)

### Links

- Solution URL: [GitHub repo](https://github.com/pbryan9/fm_results_summary)
- Live Site URL: [Netlify deployment](https://cheery-lolly-53ca2b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I started to dabble a little bit with storing global CSS values in a JSON file for use with styled-components. I'm not yet sold on the pattern; I think I've yet to find the structure that works best for me. Same story for component organization generally -- is it just a styled components thing that I wind up making dozens of little components? That's ok, but I did struggle a little with coming up with useful names for everything. I can imagine that getting worse in a more complex project.

One pattern that I did find useful was storing only the 'inner values' of the hsl() css function to my globals. That way, inside the styled component markup, I can say things like `color: hsl(${COLORS.neutral['pale-blue']} / 0.75)` to gain finer control/flexibility with the given colors.

### Continued development

As mentioned above, I'm going to keep looking for a better way to organize globals. I've seen a few things about leveraging CSS custom properties & so will try that approach to managing site-wide style constants.

## Author

- Website - [Patrick Bryan](https://pattyb.dev)
- Frontend Mentor - [@pbryan9](https://www.frontendmentor.io/profile/pbryan9)
