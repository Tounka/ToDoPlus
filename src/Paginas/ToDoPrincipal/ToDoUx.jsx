
import { BtnAgregarToDo } from "./ComponentesTodo/BtnAgregarTodo"
import { ItemToDoList } from "./ComponentesTodo/ToDoItem"
import styled from "styled-components";
const ContenedorTemporal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;
export const ToDoUx = () =>{
    return(
    <ContenedorTemporal>

        <BtnAgregarToDo />
        <ItemToDoList />
    </ContenedorTemporal>
    )
   }