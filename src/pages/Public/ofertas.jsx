import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [salaryRangeFilter, setSalaryRangeFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkillsFilter(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRangeFilter(e.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Fondo azul marino */}
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '20px', position: 'relative' }}>
        {/* Cambiado a "LOGO" */}
        <h1>LOGO</h1>
        {/* Otros elementos según tus necesidades */}
        {/* Nuevo texto grande pero más pequeño */}
        <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>Texto grande pero más pequeño</p>

        {/* Cuadros de filtrado en el fondo azul marino */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'white', marginBottom: '5px' }}>Ubicación:</label>
            <select
              value={locationFilter}
              onChange={handleLocationChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ff69b4' }}
            >
              <option value="">Seleccionar ubicación...</option>
              <option value="venezuela">Venezuela</option>
              <option value="estados-unidos">Estados Unidos</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'white', marginBottom: '5px' }}>Habilidades:</label>
            <input
              type="text"
              value={skillsFilter}
              onChange={handleSkillsChange}
              placeholder="Escribe las habilidades..."
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ff69b4' }}
            />
            {/* Puedes agregar lógica para mostrar burbujas con las habilidades ingresadas */}
            {skillsFilter && (
              <div style={{ marginTop: '5px', color: '#ff69b4' }}>Burbuja: {skillsFilter}</div>
            )}
          </div>

          <div>
            <label style={{ color: 'white', marginBottom: '5px' }}>Rango Salarial:</label>
            <input
              type="text"
              value={salaryRangeFilter}
              onChange={handleSalaryRangeChange}
              placeholder="Escribe el rango salarial..."
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ff69b4' }}
            />
          </div>
        </div>
      </div>
      {/* Lado derecho con fondo blanco y barra de búsqueda */}
      <div style={{ flex: 2, backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <label htmlFor="searchInput">Buscar ofertas:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingresa tu búsqueda..."
          style={{ width: '100%', padding: '8px', borderRadius: '5px' }}
        />
        {/* Otros elementos según tus necesidades */}
      </div>
    </div>
  );
};

export default SearchComponent;
