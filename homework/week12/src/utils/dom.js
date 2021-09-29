/* istanbul ignore next */
const camelCase = function(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    }).replace(MOZ_HACK_REGEXP, 'Moz$1')
  }
export function setStyle(element, styleName, value) {
    if (!element || !styleName) return
  
    if (typeof styleName === 'object') {
      for (var prop in styleName) {
        if (styleName.hasOwnProperty(prop)) {
          setStyle(element, prop, styleName[prop])
        }
      }
    } else {
      styleName = camelCase(styleName)
      if (styleName === 'opacity' && ieVersion < 9) {
        element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
      } else {
        element.style[styleName] = value
      }
    }
  };
export const isScroll = (el, vertical) => {
    if (isServer) return
  
    const determinedDirection = vertical !== null || vertical !== undefined
    const overflow = determinedDirection
      ? vertical
        ? getStyle(el, 'overflow-y')
        : getStyle(el, 'overflow-x')
      : getStyle(el, 'overflow')
  
    return overflow.match(/(scroll|auto)/)
  }
export const getScrollContainer = (el, vertical) => {
    if (isServer) return
  
    let parent = el
    while (parent) {
      if ([window, document, document.documentElement].includes(parent)) {
        return window
      }
      if (isScroll(parent, vertical)) {
        return parent
      }
      parent = parent.parentNode
    }
  
    return parent
  }