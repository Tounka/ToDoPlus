import styled from "styled-components";


export const DisplayPrincipal = styled.div`
    height: 100vh;
    max-height: 100dvh;
    width: 100%;
    max-width: 100dvw;
    background-color: var(--color-principal);

    padding: 20px;
    @media (max-width: 450px){
        padding: 10px;
    }

`;

export const ContenedorPrincipal = styled.div`
    display: flex;
    justify-content: "";
    align-items: center;
    flex-direction: column;
    
    min-height: 90dvh;
    width:100%;
    height: 100%;
`