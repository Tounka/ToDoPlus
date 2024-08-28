import { useState } from "react";
import styled from "styled-components";

const ContenedorItemToDoStyled = styled.div`
    max-width: 800px;
    max-width: 90%;
    display: grid;
    grid-template-columns: 35px auto;
    gap: 15px;
    align-items: center;
`;

const CheckboxStyled = styled.input`
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-rosa, pink);
    cursor: pointer;
    appearance: none;
    position: relative;
    margin: 0;
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
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    font-size: 18px;
    text-decoration: ${props => props.estadoTarea ? 'line-through' : ''};
    background-color: ${props => props.estadoTarea ? 'var(--color-verde)' : ''};
    user-select: none;
    padding-left: 10px;
    border-radius: 0 20px 20px 0;

    display: flex;
    align-items: center;
`;

export const ItemToDoList = ({ txtTarea = 'Programar', id=1 }) => {
    const [estadoTarea, setEstadoTarea] = useState(false);

    const handleCheckbox = (event) => {
        setEstadoTarea(event.target.checked);
        console.log(estadoTarea);
    };
    return (
        <ContenedorItemToDoStyled>
            
                <CheckboxStyled id={id} type="checkbox" checked={estadoTarea} onChange={handleCheckbox} />
                <TxtTarea htmlFor={id} estadoTarea= {estadoTarea} >{txtTarea}</TxtTarea>
                
        </ContenedorItemToDoStyled>
    );
};
