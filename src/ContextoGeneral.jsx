import React, { Children, createContext, useState } from 'react';
import { db } from './Firestore';
import { collection, addDoc } from "firebase/firestore"; 


// Crear el contexto

const ContextoGeneral = createContext();

const ContextoProviderGeneral = ({ children }) => {
  // Crear un estado
  const [switchModal, setSwitchModal] = useState(false);

  const agregarDocumento = async (tarea, boolTarea) =>  {
    console.log(boolTarea, tarea);
    const tipoTarea = () =>{
        if(boolTarea){
          return("TareasRecurrentes")
        }else{
          return("TareasDiarias")
        }
    }
    try {
      const docRef = await addDoc(collection(db, tipoTarea()), {
        tarea
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } 

  return (
    <ContextoGeneral.Provider value={{ switchModal, setSwitchModal, agregarDocumento }}>
      {children}
    </ContextoGeneral.Provider>
  );

}

export { ContextoProviderGeneral, ContextoGeneral };   