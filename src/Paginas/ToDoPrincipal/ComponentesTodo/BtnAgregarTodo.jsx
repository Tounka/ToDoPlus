import { useContext } from "react";
import styled from "styled-components";
import { ContextoGeneral } from "../../../ContextoGeneral";

const ContenedorToDo = styled.button`
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
    background-color: var(--color-blanco);
    color: var(--color-principal);

    &:hover{
        opacity: .95;
    }
    @media (max-width: 400px) {
        width: 240px;
        height: 60px;
    }
`;


export const BtnToDo = ({fn, txt}) => {
    const {setSwitchModal} = useContext(ContextoGeneral);

    const handleClic = () =>{
        if(fn === 1){
            setSwitchModal(true);
            
        } else if (typeof fn === 'function') {
            fn(); 
        }
    }

    return(
        <ContenedorToDo type="input" onClick={handleClic}>
            {txt}
        </ContenedorToDo>
    )
}