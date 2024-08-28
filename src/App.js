
import { ToDo } from './Paginas/ToDoPrincipal';
import { DisplayPrincipal } from './ComponentesGenerales/Displays';
import { ModalAgregarToDo } from "./Paginas/ToDoPrincipal/ComponentesTodo/ModalAgregarToDo"
import { useState } from 'react';
import { ContextoProviderGeneral } from './ContextoGeneral';

function App() {
  
  return (
    <ContextoProviderGeneral>
      <div className="App">
        <DisplayPrincipal>

          <ToDo  />
          <ModalAgregarToDo  />

        </DisplayPrincipal>
      </div>
    </ContextoProviderGeneral>

  );
}

export default App;
