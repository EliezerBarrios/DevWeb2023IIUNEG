import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [salaryRangeFilter, setSalaryRangeFilter] = useState('');
  const [jobProposals, setJobProposals] = useState([
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Desarrollador Web',
      company: 'Tech Co.',
      salaryRange: '100$ - 200$',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Agrega más propuestas de empleo según sea necesario
  ]);

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
      {/* Lado derecho con fondo blanco y barra de búsqueda */}
      <div style={{ flex: 2, backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <label htmlFor="searchInput">Buscar ofertas:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingresa tu búsqueda..."
          style={{ width: '100%', padding: '8px', borderRadius: '5px', marginBottom: '20px' }}
        />

        {/* Propuestas de empleo */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {jobProposals.map((job, index) => (
            <div key={index} style={{ width: '30%', marginBottom: '20px' }}>
              {/* Estilos para el nombre */}
              <h2 style={{ color: '#ff69b4', fontWeight: 'bold' }}>{job.title}</h2>
              <p>{job.company}</p>
              <p>Rango salarial: {job.salaryRange}</p>
              <p>{job.description}</p>
              {/* Estilos para el botón "Aplicar" */}
              <button
                style={{
                  backgroundColor: 'white',
                  color: '#808080', // Grisaceo
                  border: '1px solid #ff69b4',
                  padding: '8px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  width: '100%',
                  marginTop: '10px',
                }}
              >
                Aplicar
              </button>
            </div>
          ))}
        </div>

        {/* Otros elementos según tus necesidades */}
      </div>
    </div>
  );
};

export default SearchComponent;
