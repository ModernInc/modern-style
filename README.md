# Modern Style (WIP)

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
- v1.1
 - Media Query Support
   - min-width
    - max-width
 - 219 Properties added. 
 - Better README.md
- v1.0
 -  Folder layout done.
 - Mostly working Modern-Map that auto optimizes output CSS.
 - A Sass version of Normalize.




## Installation
#####1. Sass
You will need to be running the Ruby Gem for Sass >=v3.4.9
Run the following to figure out if your Sass is up to date.
```sh
$ sass -v
```

If you do not have Sass installed go to [http://sass-lang.com/install](http://sass-lang.com/install) and follow the instructions for Command Line.
#####2. Grunt
First check if you have Grunt installed.
```sh
$ grunt -version
```

If you don't, install it via npm.
```sh
$ npm install -g grunt-cli
```

#####3. Clone Repo and Run!
This will get your basic project up and running. There is no server, no boilerplate, no bloat. This is just a Sass framework that compiles your Sass and also runs [auto-prefixer](https://github.com/postcss/autoprefixer).
```sh
$ git clone https://github.com/ModernInc/modern-style.git modern-style
$ cd modern-style
$ npm install
$ grunt
```




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


## Modern Map Api

####1. Properties
[219 propertys](https://github.com/ModernInc/modern-style/blob/master/sass/helpers/modern-map/properties/properties.sass) are built into Modern Style out of the box. To call Modern Map, call a mixin named after the property you want and then send your value. Bellow is an example of two components and some `+property(value)` combos.
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

The following is our output from Modern Map. As you can see everything that could be combined has been. While the unique `+property(value)` pairs for both `.foo` and `.bar` are place within the same deceleration.

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
####2. Media Queries
In the [`_helpers_variables.sass`](https://github.com/ModernInc/modern-style/blob/master/sass/helpers/_helpers_variables.sass) file you should see the following:

```sass
$breakpoints: (
    PcMdMax: (max-width: #{$PcMd-width-max}),
    PcSmMax: (max-width: #{$PcSm-width-max}),

    TabLgMax: (max-width: #{$TabLg-width-max}),
    TabMdMax: (max-width: #{$TabMd-width-max}),
    TabSmMax: (max-width: #{$TabSm-width-max}),

    PhnLgMax: (max-width: #{$PhnLg-width-max}),
    PhnMdMax: (max-width: #{$PhnMd-width-max}),
    PhnSmMax: (max-width: #{$PhnSm-width-max})
)
```
These are the standard Media Queries that I like and there is an explanation about them in the wiki. Punting styles in a Media Query is as simple as the following:

```sass
$media-name: none
.foo
    ...

$media-name: PhnLgMax
.foo
    ...
```

The `$media-name` variable defines which media query your styles will be in. It will then reference the `$breakpoints` map to find it's min and or max values and output your styles properly. Of note here is the `$default-media-name`. This is set to `null` and can be changed if you want. To place styles outside of a media query make sure that `$media-name` is redefined to `null`. You no longer need to group your media query styles for a specific breakpoint together. Modern Map will make sure that they output with in the smallest amount of media queries.

Note: for now Modern Map just supports min-width and max-width media queries. We will eventually be feature complete with the media query spec.

## Questions
If you have any feel free to tweet me [@izakfilmalter](https://twitter.com/IzakFilmalter)



License
----

MIT

