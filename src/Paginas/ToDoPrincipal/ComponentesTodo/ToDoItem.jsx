import { useState } from "react";
import styled from "styled-components";

const ContenedorItemToDoStyled = styled.div`
    width: 800px;
    max-width: 90%;
    display: grid;
    grid-template-columns: 30px auto;
    gap: 10px;
    align-items: center;
`;

const CheckboxStyled = styled.input`
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-rosa, pink);
    cursor: pointer;
    appearance: none;
    position: relative;
    
    &:checked {
        background-color: var(--color-verde, green);
    }
    
    &:checked::after {
        content: '✔'; /* Puedes usar un ícono o imagen */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 16px;
    }
`;

const TxtTarea = styled.label`
    width: 100%;
    height: auto;
    font-size: 16px;
    line-height: 1.5;

    text-decoration: ${props => props.estadoTarea ? 'line-through' : ''};
`;

export const ItemToDoList = ({ txtTarea = 'Programar' }) => {
    const [estadoTarea, setEstadoTarea] = useState(false);

    const handleCheckbox = (event) => {
        setEstadoTarea(event.target.checked);
        console.log(estadoTarea);
    };
    return (
        <ContenedorItemToDoStyled>
            
                <CheckboxStyled type="checkbox" checked={estadoTarea} onChange={handleCheckbox} />
                <TxtTarea estadoTarea= {estadoTarea} >{txtTarea}</TxtTarea>
            
        </ContenedorItemToDoStyled>
    );
};
