document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const botonReset = document.getElementById("resetea");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("name").value;
        const pais = document.getElementById("pais").value;
        const genero = document.querySelector('input[name="genero"]:checked')?.value;
        const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

        resultado.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
        `;
    });

    botonReset.addEventListener("click", () => {
        formulario.reset();
        resultado.innerHTML = "";
    });
});