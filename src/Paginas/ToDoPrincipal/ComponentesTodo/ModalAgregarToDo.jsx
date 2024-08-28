import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";
import { ContextoGeneral } from '../../../ContextoGeneral';

const ContenedorModalStyled = styled.div`
    display: ${props => props.switchModal ? 'flex' : 'none'};
    position: absolute;
    left: 0;
    top: 0;
    
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.28);
    justify-content: center;
    align-items: center;
`;
const ContenedorFormulario = styled.div `
    width: 600px;
    max-width: 85%;
    height: 800px;
    max-height: 90%;

    border-radius: 20px;
    background-color: var(--color-azul);
    padding: 20px;
    position: relative;
    overflow: hidden;
`;

const BtnCerrarModalStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;

    font-size: 34px;
    color: white;
    background-color: var(--color-rojo);

    font-weight: bold;
    border: none;
    border-radius:0 0 0 10px  ;
    cursor: pointer;
    
`;

export const ModalAgregarToDo = () => {
    const modalContainer = document.querySelector("#modalAgregarItem");
    const {setSwitchModal, switchModal} = useContext(ContextoGeneral);
    const [boolTareaFija, setBoolTareaFija] = useState();
    const [txtTarea, setTxtTarea] = useState();
    const [estado, setEstado] = useState(false);
    const [valor, setValor] = useState(5);


    const handleClickBtnCerrar = () =>{
        setSwitchModal(false);
    }

    if (!modalContainer) return null;

    return ReactDOM.createPortal(
        <ContenedorModalStyled switchModal={switchModal}>
            <ContenedorFormulario>

             <BtnCerrarModalStyled onClick={() => handleClickBtnCerrar()} > <IoCloseOutline /> </BtnCerrarModalStyled>



            </ContenedorFormulario>
        </ContenedorModalStyled>,
        modalContainer
    );
};
