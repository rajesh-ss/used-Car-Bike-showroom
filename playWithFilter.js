

const e = document.getElementById("ddlViewBy");
const mnDisplEle = document.getElementById("i_ll_repeat");
let sort_by = "";



function getSld() {

  sort_by = e.options[e.selectedIndex].text;
  console.log("__--__" + sort_by);

  mnDisplEle.setAttribute("class", "item in data| ");
}


