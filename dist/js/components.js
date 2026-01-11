async function loadComponent(id, file) {
  const res = await fetch(file)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent('header', '/components/header.html'),
    loadComponent('footer', '/components/footer.html')
  ])

  document.body.style.opacity = "1"
  document.getElementById("app-loader").style.display = "none"
  document.getElementById("app").style.opacity = "1"
})

const text = "Meu resumo em\nforma de código"
const target = document.getElementById("livetype")

let index = 0

function typeEffect() {
  if (index < text.length) {
    if (text[index] === "\n") {
      target.innerHTML += "<br>"
    } else {
      target.innerHTML += text[index]
    }

    index++
    setTimeout(typeEffect, 60)
  }
}

typeEffect()