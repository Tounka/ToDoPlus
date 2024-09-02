import { useState } from "react";
import styled from "styled-components";

const ContenedorItemToDoStyled = styled.div`
    width: 600px;
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
    background-color: var(--color-blanco);
    cursor: pointer;
    appearance: none;
    position: relative;
    margin: 0;

    
    &:checked::after {
        content: '✔'; /* Puedes usar un ícono o imagen */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--color-morado);
        font-size: 16px;
    }
`;

const TxtTarea = styled.label`
    width: 100%;
    min-width: 240px;
    text-wrap: wrap;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    font-size: 18px;
    text-decoration: ${props => props.estadoTarea ? 'line-through' : ''};
    background-color: ${props => props.estadoTarea ? 'var(--color-morado)' : 'var(--color-blanco-transparente)'};

    color: ${props => props.color ? 'red' : ''} ;
    user-select: none;
    padding-left: 10px;
    border-radius: 5px 20px 20px 5px;

    color: var(--color-azul);
    display: flex;
    align-items: center;
`;

export const ItemToDoList = ({ tarea, color, registrarCambio }) => {
    const [estadoTarea, setEstadoTarea] = useState(tarea.estado);

    const handleCheckbox = (event) => {
        const nuevoEstado = event.target.checked;
        setEstadoTarea(nuevoEstado);
        registrarCambio({ ...tarea, estado: nuevoEstado });
    };

    return (
        <ContenedorItemToDoStyled>
            <CheckboxStyled id={tarea.id} type="checkbox" checked={estadoTarea} onChange={handleCheckbox} />
            <TxtTarea htmlFor={tarea.id} estadoTarea={estadoTarea} color={color}>
                {tarea.txtTarea}
            </TxtTarea>
        </ContenedorItemToDoStyled>
    );
};