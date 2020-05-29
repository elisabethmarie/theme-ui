/**
 * Copied and adapted from @types/styled-system__css
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/028c46f833ffbbb0328a28ae6177923998fcf0cc/types/styled-system__css/index.d.ts
 */

import * as CSS from 'csstype'

type StandardCSSProperties = CSS.Properties<number | string>

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | Array<T | null>

/**
 * All non-vendor-prefixed CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
export interface CSSProperties
  extends CSS.StandardProperties<number | string>,
    CSS.SvgProperties<number | string>,
    CSS.VendorProperties<number | string> {}

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...)
 */
export type CSSPseudoSelectorProps = { [K in CSS.Pseudos]?: ThemeUIStyleObject }

/**
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 */
export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudosForCSSObject,
    CSSOthersObjectForCSSObject {}

type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K]
}
type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject }
type CSSInterpolation = undefined | number | string | CSSObject
interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation
}

/**
 * Map all nested selectors
 */
export interface CSSSelectorObject {
  [cssSelector: string]: ThemeUIStyleObject
}

interface AliasesCSSProperties {
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  bg?: StandardCSSProperties['backgroundColor']
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  m?: StandardCSSProperties['margin']
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  mt?: StandardCSSProperties['marginTop']
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  mr?: StandardCSSProperties['marginRight']
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  mb?: StandardCSSProperties['marginBottom']
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  ml?: StandardCSSProperties['marginLeft']
  /**
   * The **`mx`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value placesit
   * farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://styled-system.com/#margin-props
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  mx?: StandardCSSProperties['marginLeft']
  /**
   * The **`marginX`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value
   * places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://styled-system.com/#margin-props
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginX?: StandardCSSProperties['marginLeft']
  /**
   * The **`my`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places it
   * farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://styled-system.com/#margin-props
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  my?: StandardCSSProperties['marginTop']
  /**
   * The **`marginY`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places
   * it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://styled-system.com/#margin-props
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginY?: StandardCSSProperties['marginTop']
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  p?: StandardCSSProperties['padding']
  /**
   * The **`padding-top`** padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  pt?: StandardCSSProperties['paddingTop']
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  pr?: StandardCSSProperties['paddingRight']
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  pb?: StandardCSSProperties['paddingBottom']
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  pl?: StandardCSSProperties['paddingLeft']
  /**
   * The **`px`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://styled-system.com/#padding-props
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  px?: StandardCSSProperties['paddingLeft']
  /**
   * The **`paddingX`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://styled-system.com/#padding-props
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingX?: StandardCSSProperties['paddingLeft']
  /**
   * The **`py`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://styled-system.com/#padding-props
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  py?: StandardCSSProperties['paddingTop']
  /**
   * The **`paddingY`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://styled-system.com/#padding-props
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingY?: StandardCSSProperties['paddingTop']
  // TODO: Move me to `MultiplesCSSProperties type and colocate it with the
  // multiples object possibly.
  /**
   * The **`size`** is a shorthand property for CSS properties **`width`** and **`height`**.
   *
   * @see https://theme-ui.com/sx-prop#theme-aware-properties
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  size?: StandardCSSProperties['width']
}

interface OverwriteCSSProperties {
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
   * element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: CSS.BoxShadowProperty | number
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
   * available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: CSS.FontWeightProperty | string

  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: CSS.BorderTopStyleProperty | string
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: CSS.BorderTopWidthProperty<never> | string
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: CSS.BorderBottomStyleProperty | string
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: CSS.BorderRightStyleProperty | string
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: CSS.BorderLeftStyleProperty | string
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: CSS.BorderRadiusProperty<string | number>

  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: CSS.ZIndexProperty | string
}

/**
 * Map of all available CSS properties (including aliases and overwrites)
 * and their raw value.
 */
export interface ThemeUIExtendedCSSProperties
  extends Omit<CSSProperties, keyof OverwriteCSSProperties>,
    AliasesCSSProperties,
    OverwriteCSSProperties {}

export type ThemeUICSSProperties = {
  [K in keyof ThemeUIExtendedCSSProperties]:
    | ResponsiveStyleValue<ThemeUIExtendedCSSProperties[K]>
    | ((theme: Theme) => ResponsiveStyleValue<ThemeUIExtendedCSSProperties[K]>)
    | ThemeUIStyleObject
}

export interface VariantProperty {
  /**
   * **`Variants`** can be useful for applying complex styles to a component based on a single prop.
   *
   * @example
   * const theme = {
   *   buttons: {
   *     primary: {
   *       p: 3,
   *       fontWeight: 'bold',
   *       color: 'white',
   *       bg: 'primary',
   *       borderRadius: 2,
   *     },
   *   },
   * }
   * const result = css({
   *   variant: 'buttons.primary',
   * })(theme)
   *
   * @see https://styled-system.com/variants
   */
  variant: string
}

export interface UseThemeFunction {
  (theme: any): Exclude<ThemeUIStyleObject, UseThemeFunction>
}

/**
 * The `ThemeUIStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type ThemeUIStyleObject =
  | ThemeUICSSProperties
  | CSSPseudoSelectorProps
  | CSSSelectorObject
  | VariantProperty
  | UseThemeFunction

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> }

export type TLengthStyledSystem = string | 0 | number

/**
 * Color modes can be used to create a user-configurable dark mode
 * or any number of other color modes.
 */
export interface ColorMode {
  /**
   * Body background color
   */
  background?: CSS.ColorProperty

  /**
   * Body foreground color
   */
  text?: CSS.ColorProperty

  /**
   * Primary brand color for links, buttons, etc.
   */
  primary?: CSS.ColorProperty

  /**
   * A secondary brand color for alternative styling
   */
  secondary?: CSS.ColorProperty

  /**
   * A faint color for backgrounds, borders, and accents that do not require
   * high contrast with the background color
   */
  muted?: CSS.ColorProperty

  /**
   * A contrast color for emphasizing UI
   */
  accent?: CSS.ColorProperty

  [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>
}

interface ColorModesScale extends ColorMode {
  /**
   * Nested color modes can provide overrides when used in conjunction with
   * `Theme.initialColorModeName and `useColorMode()`
   */
  modes?: {
    [k: string]: ColorMode
  }
}

export interface ThemeStyles {
  tr?: ThemeUIStyleObject
  th?: ThemeUIStyleObject
  td?: ThemeUIStyleObject
  em?: ThemeUIStyleObject
  strong?: ThemeUIStyleObject
  div?: ThemeUIStyleObject
  p?: ThemeUIStyleObject
  b?: ThemeUIStyleObject
  i?: ThemeUIStyleObject
  a?: ThemeUIStyleObject
  h1?: ThemeUIStyleObject
  h2?: ThemeUIStyleObject
  h3?: ThemeUIStyleObject
  h4?: ThemeUIStyleObject
  h5?: ThemeUIStyleObject
  h6?: ThemeUIStyleObject
  img?: ThemeUIStyleObject
  pre?: ThemeUIStyleObject
  code?: ThemeUIStyleObject
  ol?: ThemeUIStyleObject
  ul?: ThemeUIStyleObject
  li?: ThemeUIStyleObject
  blockquote?: ThemeUIStyleObject
  hr?: ThemeUIStyleObject
  table?: ThemeUIStyleObject
  delete?: ThemeUIStyleObject
  inlineCode?: ThemeUIStyleObject
  thematicBreak?: ThemeUIStyleObject
  root?: ThemeUIStyleObject
  [key: string]: ThemeUIStyleObject
}

export interface Theme {
  breakpoints?: Array<string>
  mediaQueries?: { [size: string]: string }
  space?: ObjectOrArray<CSS.MarginProperty<number | string>>
  fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>
  fonts?: ObjectOrArray<CSS.FontFamilyProperty>
  fontWeights?: ObjectOrArray<CSS.FontWeightProperty>
  lineHeights?: ObjectOrArray<CSS.LineHeightProperty<TLengthStyledSystem>>
  letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<TLengthStyledSystem>>
  sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>
  borders?: ObjectOrArray<CSS.BorderProperty<{}>>
  borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>>
  borderWidths?: ObjectOrArray<CSS.BorderWidthProperty<TLengthStyledSystem>>
  radii?: ObjectOrArray<CSS.BorderRadiusProperty<TLengthStyledSystem>>
  shadows?: ObjectOrArray<CSS.BoxShadowProperty>
  zIndices?: ObjectOrArray<CSS.ZIndexProperty>
  colorStyles?: ObjectOrArray<ThemeUICSSProperties>
  textStyles?: ObjectOrArray<ThemeUICSSProperties>
  opacities?: ObjectOrArray<CSS.OpacityProperty>

  /**
   * Enable/disable custom CSS properties/variables if lower browser
   * support is required (for eg. IE 11).
   *
   * References: https://theme-ui.com/color-modes/#turn-off-custom-properties
   */
  useCustomProperties?: boolean

  /**
   * Provide a value here to enable color modes
   */
  initialColorModeName?: string

  /**
   * Adds styles defined in theme.styles.root to the <body> element along with color and background-color
   */
  useBodyStyles?: boolean

  /**
   * Initializes the color mode based on the prefers-color-scheme media query
   */
  useColorSchemeMediaQuery?: boolean

  /**
   * Adds a global box-sizing: border-box style
   */
  useBorderBox?: boolean

  /**
   * If false, does not save color mode as a localStorage value.
   */
  useLocalStorage?: boolean

  /**
   * Define the colors that are available through this theme
   */
  colors?: ColorModesScale

  /**
   * Styles for elements rendered in MDX can be added to the theme.styles
   * object. This is the primary, low-level way to control typographic and
   * other styles in markdown content. Styles within this object are processed
   * with @styled-system/css and have access to base theme values like colors,
   * fonts, etc.
   */
  styles?: ThemeStyles

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  grids?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  buttons?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  text?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  links?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  images?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  cards?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  layout?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  forms?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  badges?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  alerts?: Record<string, ThemeUIStyleObject>

  /**
   * Variants: partial style objects that can be used for stylistic component
   * variants or making part of an application themeable. These are commonly
   * used for typographic styles, buttons, and themeable layout components.
   * Variants are also used to style built-in components.
   *
   * @see https://theme-ui.com/theme-spec
   * @see https://theme-ui.com/components/variants
   */
  messages?: Record<string, ThemeUIStyleObject>
}
