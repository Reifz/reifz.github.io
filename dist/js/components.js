async function loadComponent(id, file) {
  const res = await fetch(file)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent('header', '/components/header.html')
  ])

  document.body.style.opacity = "1"
  document.getElementById("app-loader").style.display = "none"
  document.getElementById("app").style.opacity = "1"
})
