const entry = document.getElementById("entry")
const list = document.getElementById("list")

document.getElementById("gen-links").addEventListener(
  'click',
  () => {
    // remove all elements from links
    while (list.firstChild) list.removeChild(list.firstChild);

    // get link items from text entry
    const links = entry.value.trim().split('\n');

    for (const link of links) {

      if (link) {
        const filename = link.split('\\').pop().split('/').pop();
  
        const row = document.createElement('tr');
        row.innerHTML = `<td><a href="${link}">${filename}</a></td>`
  
        list.appendChild(row);
      }

    }




  }
);