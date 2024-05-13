<script>
  import { onMount } from "svelte";
  import backend from "./../server"

  let libros;
  let consultaTitulo = '';
  let consultaAutor = '';

  let resultados = [];

  const listBooks = async() => {
    libros = await backend.getListBooks();
    console.log("ListBooks========>", libros);
  }

  // Llamada a la función de filtrado cuando el componente se monta
  onMount(() => {
    listBooks();
  });
</script>

<!-- Vista principal de la aplicación -->
<div class="container">
  <h1 class="title">Mi Biblioteca</h1>
  <div class="filters">
    <input type="text" bind:value={consultaTitulo} placeholder="Buscar por título..." class="input-filter" />
    <input type="text" bind:value={consultaAutor} placeholder="Buscar por autor..." class="input-filter" />
  </div>
  <!-- Lista de resultados -->
  {#if resultados.length > 0}
    <table class="book-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Título</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        {#each resultados as libro}
          <tr>
            <td class="code">{Math.floor(Math.random() * 10000)}</td>
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p class="no-results">No se encontraron resultados.</p>
  {/if}
</div>

<style>
  /* Estilos CSS para la vista principal */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .title {
    font-size: 36px;
    margin-bottom: 20px;
    color: #333;
  }

  .filters {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .input-filter {
    width: 250px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 10px;
  }

  .book-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .book-table th,
  .book-table td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .code {
    font-weight: bold;
  }

  .no-results {
    color: #888;
  }
</style>
