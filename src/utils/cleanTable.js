
export function cleanTable() {
    let tbodys = Array.prototype.slice.call(document.querySelectorAll("tbody"));
    tbodys.forEach(e => {
      e.parentNode.removeChild(e);
    })
  }
  