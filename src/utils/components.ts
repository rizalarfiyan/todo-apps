export const scrollToTop = (smooth = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  document.documentElement.scrollTop = 0
}
