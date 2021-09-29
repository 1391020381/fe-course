export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}
export const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}
export const isDefined = (val) => {
  return val !== undefined && val !== null
}
export const isUndefined = (val) => {
  return val === void 0;
};