AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 800,
  easing: "ease-out-cubic",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom"
})

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
