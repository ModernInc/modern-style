# Modern Style

Modern Style is a Sass framework and style guide.

  - Folder Structure with pre-made files that covers most Web Apps.
  - Modern-Map api that auto optimizes your code.
  - Style Writing guide.
   - Selector Naming
   - Property Order
   - Media Query Values
   - BEM
     - Block
     - Element
     - Modifier

Modern Style is based on a few core principles:

> CSS: Using every declaration just once
> Author: Jens Meiert, Google Webmaster

https://developers.google.com/speed/articles/optimizing-css

> BEM - Technology for creating web applications

http://bem.info/



## Version
- #####v1.0
 -  Folder layout done.
 - Mostly working Modern-Map that auto optimizes output CSS.
 - A Sass version of Normalize.



## Installation

You need Grunt installed globally:

```sh
$ npm install -g grunt-cli
```

```sh
$ git clone https://github.com/ModernInc/modern-style.git modern-style
$ cd modern-style
$ npm install
$ grunt
```

This will get your basic project up and running. There is no server, no boilerplate, no bloat. This is just a Sass framework that compiles your Sass and also runs [auto-prefixer](https://github.com/postcss/autoprefixer)

## File Tree
- sass
 - components - BEM
 - element - Element overrides
 - grid - Grid Styles
 - helpers - Global helpers and Modern-Map
 - normalize - Normalize v3.0.2
 - typography - Global Typography Styles
 - vendor - Vendor styles go here.
- www
 - css
 - index.html

More info can be found in the wiki in the future.


## Why should I use Modern Style?
CSS unlike another language doesn't have style guide. It has no rules what so ever that help to dictate how to write it well, how to help it scale, and how to work with other developers as they write on the same code base. Modern Style was birthed out of my frustrations with CSS and dealing with it's many pitfalls.

##### 1. Properties brought in order.
My writing style used to be open up the inspector, type in a bunch of property: value combos till my markup looked like my design from my designer, and then copy and past those into sublime, wait for Sass to compile and then refresh. I think this is the work flow of 90% of frontend developers. Each selector you write has a different order of properties, it's confusing. You have to read through each set of properties and values to re figure out that selector and how works.

Lets look at some of my old code and see if we can work through this.

```css
.team .curators .curator-name {
    font-family: "Gotham SSm A", "Gotham SSm B";
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    color: #542212;
    text-align: center;
    margin: 40px 0;
}

.team .curators .lead {
    font-family: "Gotham SSm A", "Gotham SSm B";
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
    color: #333332;
}
```

As you can see on first selector we have the color property 5th, and on the second selector we have it last. Both look very similar, but it's hard when something is slightly off to forget the structure of the old selector and adopt the structure of the new selector. Lets re write these two selectors and see if we can get a better pattern going.


```css
.team .curators .curator-name {
    // Font Face
    font-family: "Gotham SSm A", "Gotham SSm B";
    font-weight: 700;
    font-style: normal;

    // Modifying Font
    font-size: 24px;
    color: #542212;

    // Modifying Text Behavior
    text-align: center;

    // Box Model
    margin: 40px 0;
}

.team .curators .lead {
    // Font Face
    font-family: "Gotham SSm A", "Gotham SSm B";
    font-weight: 300;
    font-style: normal;

    // Modifying Font
    font-size: 18px;
    line-height: 1.4;
    color: #333332;

    // Modifying Text Behavior
    text-align: center;
}
```

Wow, that looks like code I could read all day! We broke the code up into some sections, the main one being typography related code. I have comment each section to give a little bit of detail as to how they are organized. The main principles are as follows:

- Background
- Typography
 - Font-Face
 - Modifying Font
 - Int Support
 - Modifying Text Behavior
 - Modifying Punctuation
 - Modifying Lists
- Box Model
 - Display
 - Flex
 - Table
 - Float
 - Posititon
 - Margin
 - Border
 - Height
 - Width
 - Padding
 - z-index
- Transform
- Transitions
- Animation

##### 2. Simplify selectors.
Lets look back at our css.
```css
.team .curators .curator-name {
    ...
}

.team .curators .lead {
    ...
}
```

Our selectors are overly complex and they don't have very meaningful names either. Enter our hero [http://bem.info](BEM). BEM stands for Block Element Modifier. If we think of a nav, the first div would be our block element of nav. Blocks are the larger elements in your HTML, other examples of common blocks are sidebars, comments section, articles, footers, and heros. A note here, a block can live in another block. In the case of our CSS above it looks like we have two Blocks, team and curators.

ELements are the next part of BEM. Elements live in their unique block. We have a curator-name and a lead element. Because I know where this code comes from, lead is not actually an element but a modifier which we will cover shortly. BEM has naming rules for CSS selectors, I'm gonna rewrite my CSS with these naming rules so you can see them.


```css
.team .curators .curator__name {
    ...
}

.team .curators .curator__name--lead {
    ...
}
```

As you can see the name of our Block is now in both our Element and our Modifier. BEM dictates two underscores `__` between Blocks and Elements, and two dashes `--` between Elements and Modifiers. Modifiers are for when you have a Element that needs to be changed slightly.

There are two more principles to BEM. Only style HTML elements by them selves:

Wrong:
```css
.team .curators h1 {
    ...
}
```
Right:
```css
h1 {
    ...
}
```

If I need to target that `h1`, and only if it's in `.team` and `.curators`, put a class on it.

And the last one gets a ton of hate but is the right way to go. DON'T INDENT YOUR CODE!

```css
.curator__name {
    ...
}

.curator__name--lead {
    ...
}
```

We don't need to tell our css that `.curator__name` and `.curator__name--lead` are in `.team` `.curators`. Since we follow BEM they are unique. This will massively Improve our performance.

Lets look back at properties and values and see if we can slim down some because of using BEM.
```css
.curator__name {
    // Font Face
    font-family: "Gotham SSm A", "Gotham SSm B";
    font-weight: 700;
    font-style: normal;

    // Modifying Font
    font-size: 24px;
    color: #542212;

    // Modifying Text Behavior
    text-align: center;

    // Box Model
    margin: 40px 0;
}

.curator__name--lead {
    // Font Face
    font-weight: 300;

    // Modifying Font
    font-size: 18px;
    line-height: 1.4;
    color: #333332;
}
```

Since `.curator__name--lead` is a modifier class, we don't need to include the property: value pairs that are not not being overridden. You would include both classes on your HTML element.


#####3. @extend kinda sucks.
I love Sass. But it's not perfect, neither this tool. For a long time I used @extend to get to every deceleration just once. THis has a few problems that start to propup. @extend doesn't play well in media queries. So you have to make a placeholder for every media query and every unique property: value combo. This is a pain. First lets look at some new example code.

```sass
.foo
    +color(#fff)

    +display(block)

    +margin(15px)

    +padding(30px)

.bar
    +color(#000)

    +display(block)

    +padding(30px)
```

`.foo` and `.bar` are two different Blocks in this example. They are in different partials scattered in our project. We want them to be able share code because they do. But at the same time we need to easily be able to remove one with out effecting the other. Lets look at the output CSS.

```css
.foo, .bar {
  display: block;
}

.foo, .bar {
  padding: 30px;
}

.foo {
  color: #fff;
  margin: 15px;
}

.bar {
  color: #000;
}

```

DID I JUST BLOW YOUR MIND OR WHAT? Lets talk about how this works and then why it's awesome. Each property is a mixin. You call it with a `+property(value)` Modern-Map starts to build a map within a map within a map within a map. This contains all the information about the selector you wrote, the media query it's in, and all of it's properties and values. We then take it part at the end. Combining everything that is not unique to a single selector and then it outputs it. Look at `.foo`. both `color: #fff` and `padding: 15px` are unique to it. The output is as almost as optimized as you can get. We are still work media query support, which should be here in v1.1


## Questions
If you have any feel free to tweet me @izakfilmalte



License
----

MIT

