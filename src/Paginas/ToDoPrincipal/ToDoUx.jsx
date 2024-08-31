
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
`;
export const ToDoUx = () =>{
    const {tareas} = useContext(ContextoGeneral);
    console.log("11111", tareas)
    return(
    <ContenedorTemporal>

        <BtnAgregarToDo />
            {tareas.tareasRecurrentes.map((tarea) => (
                <ItemToDoList key={tarea.id} txtTarea={tarea.txtTarea} />
            ))}

            {tareas.tareasDiaria.map((tarea) => (
                <ItemToDoList key={tarea.id} txtTarea={tarea.txtTarea} />
            ))}
           

        <ItemToDoList />
    </ContenedorTemporal>
    )
   }