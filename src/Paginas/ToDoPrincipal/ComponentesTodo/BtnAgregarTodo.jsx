import styled from "styled-components";

const ContenedorAgregarToDo = styled.button`
    height: 120px;
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

    const handleClic = () =>{
        console.log('CLICK');
    }

    return(
        <ContenedorAgregarToDo type="input" onClick={() => handleClic()} >
            Agregar Tarea
        </ContenedorAgregarToDo>
    )
}