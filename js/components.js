
const componentes = {
    header: "components/header.html",
    navbar: "components/navbar.html",
    footer: "components/footer.html"
};

async function cargarComponentes() {
    for (const [id, archivo] of Object.entries(componentes)) {
        const elemento = document.getElementById(id);

        if (!elemento) continue;

        try {
            const respuesta = await fetch(archivo);

            if (!respuesta.ok) {
                throw new Error(`Error al cargar ${archivo}`);
            }

            elemento.innerHTML = await respuesta.text();
        } catch (error) {
            console.error(error);
        }
    }
}

cargarComponentes();
