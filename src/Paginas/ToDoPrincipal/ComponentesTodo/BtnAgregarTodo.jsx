import { useContext } from "react";
import styled from "styled-components";
import { ContextoGeneral } from "../../../ContextoGeneral";

const ContenedorAgregarToDo = styled.button`
    height: 80px;
    width: 300px;
    font-size: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    border-radius: 20px;
    border: none;
    background-color: var(--color-azul);
    color: var(--color-principal);

    &:hover{
        opacity: .95;
    }

`;


export const BtnAgregarToDo = () => {
    const {setSwitchModal} = useContext(ContextoGeneral);
    const handleClic = () =>{
        setSwitchModal(true);
    }

    return(
        <ContenedorAgregarToDo type="input" onClick={() => handleClic()} >
            Agregar Tarea
        </ContenedorAgregarToDo>
    )
}