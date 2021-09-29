import {
    isHtmlElement,
    isFunction,
    isUndefined,
    isDefined
  } from '@/utils/types';
  import {
    getScrollContainer
  } from '@/utils/dom';
function throttle(func,await){
    let lastTime = 0//设置初始时间
    return function(){  
       let now1 = new Date().getTime()//获取当前时间
       if(now1 - lasttime > await) {
           func.apply(func , [...arguments])
           lastTime = 0
       }
    }
};
  const getPositionSize = (el, prop) => {
    return el === window || el === document
      ? document.documentElement[prop]
      : el[prop]
  }
  
  const getOffsetHeight = el => {
    return getPositionSize(el, 'offsetHeight')
  }
  
  const getClientHeight = el => {
    return getPositionSize(el, 'clientHeight')
  }
  
  const scope = 'ElInfiniteScroll'
  const attributes = {
    delay: {
      type: Number,
      default: 200
    },
    distance: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    immediate: {
      type: Boolean,
      default: true
    }
  }
  
  const getScrollOptions = (el, vm) => {
    if (!isHtmlElement(el)) return {}
  
    return entries(attributes).reduce((map, [key, option]) => {
      const { type, default: defaultValue } = option
      let value = el.getAttribute(`infinite-scroll-${key}`)
      value = isUndefined(vm[value]) ? value : vm[value]
      switch (type) {
        case Number:
          value = Number(value)
          value = Number.isNaN(value) ? defaultValue : value
          break
        case Boolean:
          value = isDefined(value) ? value === 'false' ? false : Boolean(value) : defaultValue
          break
        default:
          value = type(value)
      }
      map[key] = value
      return map
    }, {})
  }
  
  const getElementTop = el => el.getBoundingClientRect().top
  
  const handleScroll = function(cb) {
    const { el, vm, container, observer } = this[scope]
    const { distance, disabled } = getScrollOptions(el, vm)
  
    if (disabled) return
  
    const containerInfo = container.getBoundingClientRect()
    if (!containerInfo.width && !containerInfo.height) return
  
    let shouldTrigger = false
  
    if (container === el) {
      // be aware of difference between clientHeight & offsetHeight & window.getComputedStyle().height
      const scrollBottom = container.scrollTop + getClientHeight(container)
      shouldTrigger = container.scrollHeight - scrollBottom <= distance
    } else {
      const heightBelowTop = getOffsetHeight(el) + getElementTop(el) - getElementTop(container)
      const offsetHeight = getOffsetHeight(container)
      const borderBottom = Number.parseFloat(getStyleComputedProperty(container, 'borderBottomWidth'))
      shouldTrigger = heightBelowTop - offsetHeight + borderBottom <= distance
    }
  
    if (shouldTrigger && isFunction(cb)) {
      cb.call(vm)
    } else if (observer) {
      observer.disconnect()
      this[scope].observer = null
    }
  
  }
export default {
    name:'InfiniteScroll',
    inserted(el, binding, vnode) {
        const cb = binding.value
    
        const vm = vnode.context
        // only include vertical scroll
        const container = getScrollContainer(el, true)
        const { delay, immediate } = getScrollOptions(el, vm)
        const onScroll = throttle(delay, handleScroll.bind(el, cb))
    
        el[scope] = { el, vm, container, onScroll }
    
        if (container) {
          container.addEventListener('scroll', onScroll)
    
          if (immediate) {
            const observer = el[scope].observer = new MutationObserver(onScroll)
            observer.observe(container, { childList: true, subtree: true })
            onScroll()
          }
        }
      },
      unbind(el) {
        const { container, onScroll } = el[scope]
        if (container) {
          container.removeEventListener('scroll', onScroll)
        }
      }
}