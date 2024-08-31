import React, { createContext, useEffect, useState } from 'react';
import { db } from './Firestore'; // Asegúrate de que esta ruta sea correcta
import { doc, getDoc, collection, addDoc, query, getDocs, orderBy } from "firebase/firestore";

// Crear el contexto
const ContextoGeneral = createContext();

const ContextoProviderGeneral = ({ children }) => {
  // Crear un estado
  const [switchModal, setSwitchModal] = useState(false);
  const [tareas, setTareas] = useState({ tareasDiaria: [], tareasRecurrentes: [] });

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        // Obtén las tareas diarias
        const tareasDiariasQuery = query(collection(db, "TareasDiarias"),orderBy("valor", "desc"));
        const tareasDiariasSnapshot = await getDocs(tareasDiariasQuery);
        const tareasDiariasList = tareasDiariasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        // Ordena las tareas diarias por valor
        tareasDiariasList.sort((a, b) => a.valor - b.valor); // Ordenar de menor a mayor
  
        // Obtén las tareas recurrentes
        const tareasRecurrentesQuery = query(collection(db, "TareasRecurrentes"), orderBy("valor", "desc"));
        const tareasRecurrentesSnapshot = await getDocs(tareasRecurrentesQuery);
        const tareasRecurrentesList = tareasRecurrentesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
    
        // Ordena las tareas recurrentes por valor
        tareasDiariasList.sort((a, b) => a.valor - b.valor); // Ordenar de menor a mayor
  
        setTareas({
          tareasDiaria: tareasDiariasList.sort((a, b) => a.valor + b.valor),
          tareasRecurrentes: tareasRecurrentesList
        });
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };
  
    fetchTareas();
  }, []);
  

  const agregarDocumento = async (tarea, boolTarea) => {
    const tipoTarea = boolTarea ? "TareasRecurrentes" : "TareasDiarias";

    try {
      const docRef = await addDoc(collection(db, tipoTarea), {
        ...tarea
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <ContextoGeneral.Provider value={{ switchModal, setSwitchModal, tareas, agregarDocumento }}>
      {children}
    </ContextoGeneral.Provider>
  );
};

export { ContextoProviderGeneral, ContextoGeneral };
