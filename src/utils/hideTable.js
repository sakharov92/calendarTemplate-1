export function hideTable(e) {

    let target = e.target;
    let classList = target.classList;
    let tableBodyDataClassList = target.closest(".tableBody").nextSibling.classList;
    if (classList.contains("fa-chevron-up")) {
        classList.remove("fa-chevron-up");
        classList.add("fa-chevron-down");
        tableBodyDataClassList.add("hideTable");
    } else {
        classList.add("fa-chevron-up");
        classList.remove("fa-chevron-down");
        tableBodyDataClassList.remove("hideTable");
    }
}