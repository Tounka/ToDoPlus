import React, { Children, createContext, useState } from 'react';

// Crear el contexto
const ContextoGeneral = createContext();

const ContextoProviderGeneral = ({ children }) => {
  // Crear un estado
  const [switchModal, setSwitchModal] = useState(false);

  return (
    <ContextoGeneral.Provider value={{ switchModal, setSwitchModal }}>
      {children}
    </ContextoGeneral.Provider>
  );

}

export { ContextoProviderGeneral, ContextoGeneral };   