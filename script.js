<script>
    function mostrarInformacion() {
    const seccion = document.getElementById('medellin-info');
    seccion.style.display = 'block';
    seccion.scrollIntoView({behavior: 'smooth' });
  }
</script>
function mostrarCiudad(id) {
    const seccion = document.getElementById(id);
    seccion.style.display = 'block';
    seccion.scrollIntoView({ behavior: 'smooth' });
}
</script > nav {
    display: flex;
    flex - wrap: wrap;
    align - items: center;
    justify - content: space - between;
    gap: 1rem;
    padding: 1rem;
    background - color: #0277bd;
}

nav ul {
    list - style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

nav a {
    color: white;
    text - decoration: none;
    font - weight: bold;
}

.redes - nav {
    display: flex;
    gap: 1rem;
}

.redes - nav a {
    color: white;
    font - size: 1.3rem;
}

.redes - nav a:hover {
    color: #ffeb3b;
}