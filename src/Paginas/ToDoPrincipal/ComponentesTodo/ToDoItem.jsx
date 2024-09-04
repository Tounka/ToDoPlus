import { useContext, useState } from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { ContextoGeneral } from "../../../ContextoGeneral";

const ContenedorItemToDoStyled = styled.div`
    width: 600px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 35px auto 35px;
    gap: 15px;
    align-items: center;
    
    
`;
const BtnEspecialStyled =  styled.div`
    display: flex;
    align-items: center;
    
    font-size: 24px;
    color: var(--color-morado);
    cursor: pointer;
`;
const ContenedoresBtnStyled = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    background-color: white;
    height: 35px;
    width: 100%;
    
    border-radius: 10px;
    
    
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
    
    text-wrap: prety;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    font-size: 18px;
    text-decoration: ${props => props.estadoTarea ? 'line-through' : ''};
    background-color: ${props => props.estadoTarea ? 'var(--color-azul)' : (props.color ? 'var(--color-morado)' : 'var(--color-blanco-transparente)')};
    user-select: none;

    color:  ${props => props.estadoTarea ? 'var(--color-amarillo)' : 'var(--color-azul)'} ;
    user-select: none;
    padding-left: 10px;
    border-radius: 5px 20px 20px 5px;

    
    display: flex;
    align-items: center;
`;



const BtnEspecial = ({icon, fn}) =>{

    return(
        <BtnEspecialStyled>
            {icon}
        </BtnEspecialStyled>
    )
}

export const ItemToDoList = ({ tarea, color, registrarCambio }) => {
    const [estadoTarea, setEstadoTarea] = useState(tarea.estado);
    const {setTareaEnFoco, setSwitchModal} = useContext(ContextoGeneral);
    const handleCheckbox = (event) => {
        const nuevoEstado = event.target.checked;
        setEstadoTarea(nuevoEstado);
        registrarCambio({ ...tarea, estado: nuevoEstado });
    };
    
    const handleClickEditar = (tarea) =>{
        setTareaEnFoco(tarea);
        setSwitchModal(true);
        
    }

    return (
        <ContenedorItemToDoStyled>

            <CheckboxStyled id={tarea.id} type="checkbox" checked={estadoTarea} onChange={handleCheckbox} />

            <TxtTarea htmlFor={tarea.id} estadoTarea={estadoTarea} color={color}>
                {tarea.txtTarea}
            </TxtTarea>

            <ContenedoresBtnStyled onClick={() => handleClickEditar(tarea)}>
                <BtnEspecial icon = {<MdEdit />} />
            </ContenedoresBtnStyled>
        
        </ContenedorItemToDoStyled>
    );
};