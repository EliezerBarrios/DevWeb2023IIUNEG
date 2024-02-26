import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Fondo azul marino */}
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '20px' }}>
        <h1>Filtros de Búsqueda</h1>
        <label htmlFor="searchInput">Buscar ofertas:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingresa tu búsqueda..."
          style={{ width: '100%', padding: '8px' }}
        />
        {/* Agrega aquí otros elementos de filtro según tus necesidades */}
      </div>
      {/* Lado derecho (puede dejarse vacío por ahora) */}
      <div style={{ flex: 2, backgroundColor: 'white' }}>
        {/* Contenido del lado derecho (resultados de búsqueda, etc.) */}
      </div>
    </div>
  );
};

export default SearchComponent;
