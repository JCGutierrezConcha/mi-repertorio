let url = "/cancion";
let tbody = document.getElementById("cuerpo");
let titulo = document.getElementById("cancion");
let artista = document.getElementById("artista");
let tono = document.getElementById("tono");

let canciones = [];
window.onload = getData();

async function getData() {
    await axios.get(url + "es").then((data) => {
        canciones = data.data;
        tbody.innerHTML = "";
        canciones.forEach((c, i) => {
            tbody.innerHTML += /*html*/`
        <tr>
          <td>${i + 1}</td>
          <td>${c.titulo}</td>
          <td>${c.artista}</td>
          <td>${c.tono}</td>
          <td>
            <button class="btn btn-warning" onclick="prepararCancion(${i},'${c.id}')">Editar</button>
            <button class="btn btn-danger" onclick="eliminarCancion(${i},'${c.id}')">Eliminar</button>
          </td>
        </tr>
      `;
        });
    });
    titulo.value = "";
    artista.value = "";
    tono.value = "";
}

function nuevaCancion() {
    titulo;
    artista;
    tono;

    let data = {
        titulo: titulo.value,
        artista: artista.value,
        tono: tono.value,
    };

    if (!titulo.value.trim() || !artista.value.trim() || !tono.value.trim()) {
        alert('Debe de rellenar todos los campos')
        return
    }


    axios.post(url, data).then(() => getData());
}

function eliminarCancion(i, id) {
    axios.delete(url + "/" + id).then(() => {
        alert("Canción " + canciones[i].titulo + " eliminada");
        getData();
    });
}

function prepararCancion(i, id) {
    titulo.value = canciones[i].titulo;
    artista.value = canciones[i].artista;
    tono.value = canciones[i].tono;
    document
        .getElementById("editar")
        .setAttribute("onclick", `editarCancion('${id}')`);
    document.getElementById("agregar").style.display = "none";
    document.getElementById("editar").style.display = "block";
}

function editarCancion(id) {
    if (!titulo.value.trim() || !artista.value.trim() || !tono.value.trim()) {
        alert('Debe de rellenar todos los campos')
        return
    }

    axios
        .put(url + "/" + id, {
            titulo: titulo.value,
            artista: artista.value,
            tono: tono.value,
        })
        .then(() => {
            getData();
            document.getElementById("agregar").style.display = "block";
            document.getElementById("editar").style.display = "none";
        });
}
