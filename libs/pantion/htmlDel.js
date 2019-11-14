function htmlDel() {
  document.getElementsByTagName('html')[0].className = ""
  document.getElementsByTagName('html')[0].style=""
}

module.exports = htmlDel