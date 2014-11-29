# modern-style

Style layout within a selector.

### Background
Shorthand first, followed by color and then image properties based on their relationship to the box model.

- `background` – I don't like this shorthand
- `background-color`
- `background-image`

- `background-attachment`
- `background-repeat`
- `background-position`
- `background-origin`
- `background-size`
- `background-clip`

**Some Browser support - Use with discretion**

- `filter`

### Typography
**Properties located in partials**

- `@font-face`
- `font-family`
- `font-size`
- `color`

### Font File
```
@font-face
    font – I don't like this shorthand
    font-family
    font-weight
    font-style
    font-variant
    font-variant-ligatures
```
- `font-feature-settings`

### Modifying font
- `font-size`
- `line-height`
- `letter-spacing`
- `word-spacing`
- `color`

### Int support
- `writing-mode`
- `unicode-bidi`
- `direction`

### Modifying behavior
- `text-transform`
- `text-decoration`
- `text-align`
- `text-align-last`
- `vertical-align`
- `text-indent`
- `text-shadow`
- `word-break`
- `word-wrap`
- `text-overflow`

### Modifying punctuation
- `quotes`
- `hanging-punctuation`
- `tab-size`
- `white-space`

### Modifying Lists
- `list-style`
- `counter-increment`
- `counter-reset`

### Some Browser support - Use with discretion
- `orphans`

### Low Browser Support - Don't use
- `hyphens`
- `line-break`
- `text-combine-upright`
- `text-justify`
- `@font-feature-values`
- `font-kerning`
- `font-language-override`
- `font-size-adjust`
- `font-stretch`
- `font-synthesis`
- `font-variant-alternates`
- `font-variant-caps`
- `font-variant-east-asian`
- `font-variant-numeric`
- `font-variant-position`
- `text-orientation`
- `text-underline-position`
- `ime-mode`

## Display
### Properties located in partials
- `z-index`

### box-sizing
- `display` - when not flex
- `box-decoration-break`

- `overflow`
- `overflow-x`
- `overflow-y`
- `overflow-wrap`

- `opacity`
- `visibility`

- `cursor`
- `resize`

- `page-break`

## Flex
### Parent
- `display` - when flex
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

### Child
- `order`
- `flex`
- `align-self`

## Column
Needs more browser support

## Table
- `caption-side`
- `empty-cells`
- `table-layout`

## Float
- `float`
- `@extend %clearfix`

Don't use clear, use %clearfix

## Position
- `@extend %position-(type)`
- `+position(top, right, bottom, left)` - initial = null
- `@extend %position - 0, 0, 0, 0`

## Margin
- `margin`

## Border
- `box-shadow`
- `outline`
- `border`
- `border-radius`
- `border-collapse`
- `border-spacing`

## Height / Width
- `max-height`
- `min-height`
- `height`
- `max-width`
- `min-width`
- `width`

## Padding
- `padding`

## Transform
- `transform`
- `perspective`
- `backface-visibility`

## Transitions
- `transition`

## Animation
In it's own partial

```sass
::before
    @extend %content
```

```sass
::after
    @extend %content
```

- `:hover`
- `:active`
