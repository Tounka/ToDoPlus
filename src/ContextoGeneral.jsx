import React, { createContext, useEffect, useState } from 'react';
import { db } from './Firestore'; // Asegúrate de que esta ruta sea correcta
import { doc, getDoc, collection, addDoc, query, getDocs, orderBy, updateDoc } from "firebase/firestore";

const ContextoGeneral = createContext();

const ContextoProviderGeneral = ({ children }) => {
 
  const [actualizadorTareas, setActualizadorTareas] = useState(0);

  const fnActualizadorTareas = () => {
    setActualizadorTareas(actualizadorTareas + 1 );
    console.log("se acualizas")
  };

  const [switchModal, setSwitchModal] = useState(false);
  const [tareas, setTareas] = useState({ tareasDiaria: [], tareasRecurrentes: [] });

  useEffect(() => {
    const fetchTareas = async () => {
      try {
 
        const tareasDiariasQuery = query(collection(db, "TareasDiarias"),orderBy("valor", "desc"));
        const tareasDiariasSnapshot = await getDocs(tareasDiariasQuery);
        const tareasDiariasList = tareasDiariasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  

        const tareasRecurrentesQuery = query(collection(db, "TareasRecurrentes"), orderBy("valor", "desc"));
        const tareasRecurrentesSnapshot = await getDocs(tareasRecurrentesQuery);
        const tareasRecurrentesList = tareasRecurrentesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
    
     
  
        setTareas({
          tareasDiaria: tareasDiariasList,
          tareasRecurrentes: tareasRecurrentesList
        });
        console.log(tareas);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };
  
    fetchTareas();
  }, [actualizadorTareas]);
  

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
  

  const actualizarDocumento = async (idDocumento, boolTarea, nuevosValores) => {
    try {
      const tipoTarea = boolTarea ? "TareasRecurrentes" : "TareasDiarias";
      const docRef = doc(db, tipoTarea, idDocumento);
  
      await updateDoc(docRef, nuevosValores);
  
      console.log("Documento actualizado con éxito:", idDocumento);
    } catch (error) {
      console.error("Error actualizando el documento: ", error);
    }
  };

  return (
    <ContextoGeneral.Provider value={{ switchModal, setSwitchModal, tareas, agregarDocumento, fnActualizadorTareas, actualizarDocumento }}>
      {children}
    </ContextoGeneral.Provider>
  );
};

export { ContextoProviderGeneral, ContextoGeneral };
