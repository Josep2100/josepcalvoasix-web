// Cargar comandos dinámicamente
async function cargarManuales() {
    const response = await fetch("data/comandos.json");
    const data = await response.json();

    const contenedor = document.getElementById("manuales-container");

    if (!contenedor) return;

    data.forEach(video => {
        const bloque = document.createElement("div");
        bloque.classList.add("manual-card");

        let comandosHTML = video.comandos.map(cmd => `<li><code>${cmd}</code></li>`).join("");

        bloque.innerHTML = `
            <h3>${video.titulo}</h3>
            <ul>${comandosHTML}</ul>
            <a href="https://www.youtube.com/watch?v=${video.video}" target="_blank" class="btn-ver">
                Ver vídeo
            </a>
        `;

        contenedor.appendChild(bloque);
    });
}

document.addEventListener("DOMContentLoaded", cargarManuales);
