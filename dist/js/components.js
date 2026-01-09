async function loadComponent(id, file) {
  const res = await fetch(file)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

loadComponent('head', '/components/head.html')
loadComponent('header', '/components/header.html')
