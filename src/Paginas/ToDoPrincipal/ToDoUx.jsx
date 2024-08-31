
import { useContext } from "react";
import { BtnAgregarToDo } from "./ComponentesTodo/BtnAgregarTodo"
import { ItemToDoList } from "./ComponentesTodo/ToDoItem"
import styled from "styled-components";
import { ContextoGeneral } from "../../ContextoGeneral";
const ContenedorTemporal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 600px;
    max-width: 90%;
    min-height: 600px;

    border: 4px solid var(--color-blanco-transparente);
    padding: 20px;
    border-radius: 20px;
`;
const ContenedorTareas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

`;


export const ToDoUx = () =>{
    const {tareas} = useContext(ContextoGeneral);
    console.log("11111", tareas)
    return(
    <ContenedorTemporal>

        <BtnAgregarToDo />

        <ContenedorTareas>
            {tareas.tareasRecurrentes.map((tarea) => (
                <ItemToDoList key={tarea.id} id={tarea.id} txtTarea={tarea.txtTarea} color={true} />
            ))}

            {tareas.tareasDiaria.map((tarea) => (
                <ItemToDoList key={tarea.id} id={tarea.id} txtTarea={tarea.txtTarea}  />
            ))}
        </ContenedorTareas>
    
           

       
    </ContenedorTemporal>
    )
   }