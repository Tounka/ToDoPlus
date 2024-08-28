import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";
import { ContextoGeneral } from '../../../ContextoGeneral';
import { Titulo } from '../../../ComponentesGenerales/Titulos';


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
const ContenedorFormulario = styled.form `
    width: 600px;
    max-width: 85%;
    height: 800px;
    max-height: 90%;

    border-radius: 20px;
    background-color: var(--color-azul);
    padding: 20px;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    
`;

const ContenedorInputs = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
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

const InputToDoStyled = styled.input`
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    min-height: 40px;
    height: 100%;
  
  

`;
const InputRangeStyled = styled(InputToDoStyled)`

  -webkit-appearance: none; /* Eliminar el estilo predeterminado en WebKit */
  appearance: none; /* Eliminar el estilo predeterminado */
  width: 100%; /* Ajustar el ancho */
  height: 8px; /* Ajustar la altura */
  background: transparent; /* Hacer la pista de fondo transparente */
  outline: none; /* Eliminar el borde */

  /* Estilos para la pista en WebKit (Chrome, Safari) */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: white; /* Color de la pista */
    border-radius: 5px;
  }

  /* Estilos para la pista de progreso en WebKit */
  &::-webkit-progress-bar {
    background: #007bff; /* Color azul */
    height: 8px;
  }

  /* Estilos para el thumb en WebKit */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff; /* Color azul */
    cursor: pointer;
    border-radius: 50%;
    margin-top: -6px; /* Ajustar la posición del thumb */
  }








`;

const LabelInputToDoStyled = styled.label`
    display: flex;
    justify-content: ${props => props.vertical ? "center" : "end" };
    align-items: center;
    color: white;
    font-size: 1.2em;
    text-shadow: 0 0 5px rgba(0,0,0,0.24);
    @media (max-width: 380px){
        justify-content: center;
    }
`;
const ContenedorInputToDoStyled = styled.div`
    display: grid;
    
    grid-template-columns: ${props => props.vertical ? "" : "1fr 3fr" } ;
    grid-template-rows: ${props => props.vertical ? "1fr 3fr" : "" } ;
   justify-content: ${props => props.center ? 'center' : ""};
    gap: 10px;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 380px){
        grid-template-columns: 1fr ;
        height: 100px;
    }
`;


const InputToDoGenerico = ({id, txt, type, vertical, propsInput, setEstado }) =>{
    const handleChange = (event) =>{
        setEstado(event.target.value);
    }
    return(
        <ContenedorInputToDoStyled vertical= {vertical}  >
            <LabelInputToDoStyled htmlFor={id} vertical= {vertical}  > {txt} </LabelInputToDoStyled>
            <InputToDoStyled id={id} type={type} onChange={handleChange}  ></InputToDoStyled>
        </ContenedorInputToDoStyled>
    )
};


const InputToDoDate = ({id, bool, vertical, setEstado}) =>{
    const txt = () =>{
        if(bool){
            return("Fecha de Termino");
        }else{
            return("Fecha de Tarea");
        }
    }
    const handleChange = (event) => {
        const valor = event.target.value; // Valor en formato YYYY-MM-DD
        const fecha = new Date(valor); // Convierte la cadena a un objeto Date
        setEstado(fecha); // Actualiza el estado con el objeto Date
    };
    return(
        <ContenedorInputToDoStyled vertical= {vertical}  >
            <LabelInputToDoStyled htmlFor={id} vertical= {vertical}  > {txt()} </LabelInputToDoStyled>
            <InputToDoStyled id={id} type="date" onChange={handleChange}  ></InputToDoStyled>
        </ContenedorInputToDoStyled>
    )
};
const InputToDoRange = ({ id, txt, vertical, valor, setValor }) => {
    const [txtLabel, setTxtLabel] = useState(txt);

    const Textos = ["No Prioritaria", "Baja", "Normal", "Alta", "Prioritaria"];

    const handleOnChange = (event) => {
        const nuevoValor = parseInt(event.target.value, 10);
        setValor(nuevoValor); 
        setTxtLabel(Textos[nuevoValor - 1]); 
        

 
    };

    return (
        <ContenedorInputToDoStyled vertical={vertical}>
            <LabelInputToDoStyled htmlFor={id} vertical={vertical}>
                {txtLabel}
            </LabelInputToDoStyled>
            <InputRangeStyled
                id={id}
                type="range"
                min="1"
                max="5"
                step="1"
                value={valor}
                onChange={handleOnChange}
            />
        </ContenedorInputToDoStyled>
    );
};

const ContenedorHorizontal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 20px;

    @media (max-width: 380px){
        grid-template-columns: 1fr ;
    }
    
`;

const ContenedorSwitchStyled = styled.div `
    display: grid;
    grid-template-columns: ${props => props.bool ? "2fr  1fr" : "1fr 2fr"};
    transition: .2s ease;
    width: 100%;
    height: 100%;
    position: relative;

    justify-content:center;
    align-items: center;

    border-radius: 25px;
    overflow: hidden;


`;

const ButtonSwitch = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    background-color: ${props => props.bg ? props.bg : ''};
    font-size: 24px;
    color: white;
    cursor: pointer;

    transition: transform .2s ease;
  
`;
const  BtnSubmit = styled.button`
    width: 260px;
    height: 80px;
    border:none;

    display:flex;
    justify-content:center;
    align-items: center;

    border-radius: 25px;
    overflow: hidden;
    background-color: var(--color-verde);
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity .2s ease ;
    &:hover{
        opacity: .8;
        transition: opacity .2s ease ;
    }

    @media (max-width: 380px){
        
        height: 60px;
    }

`;
const InputToDoSelectorBool = ({id, txt, type, vertical, bool, setBoolTareaRecurrente}) =>{
    const handleClick = (valor) =>{
        setBoolTareaRecurrente(valor);
    }
    return(
        <ContenedorInputToDoStyled vertical= {vertical}  >
            <LabelInputToDoStyled vertical= {vertical} > {txt} </LabelInputToDoStyled>
                <ContenedorSwitchStyled bool = {bool} >
                    <ButtonSwitch type='button' bg= "var(--color-verde)" onClick={() => handleClick(true)} > Si </ButtonSwitch >
                    
                    <ButtonSwitch type='button' bg= "var(--color-rojo)" onClick={() => handleClick(false)} > No </ButtonSwitch >
                </ContenedorSwitchStyled>
        </ContenedorInputToDoStyled>
    )
};




export const ModalAgregarToDo = () => {
    const modalContainer = document.querySelector("#modalAgregarItem");
    const {setSwitchModal, switchModal} = useContext(ContextoGeneral);
    const [boolTareaRecurrente, setBoolTareaRecurrente] = useState(false);
    const [txtTarea, setTxtTarea] = useState("");
    const [estado, setEstado] = useState(false);
    const [fecha, setFecha] = useState(new Date());
    const [valor, setValor] = useState(3);

    const { agregarDocumento } = useContext(ContextoGeneral);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(boolTareaRecurrente);
        console.log(txtTarea);
        console.log(estado);
        console.log(valor);
        console.log(fecha);
    

        const objTarea = {boolTareaRecurrente, txtTarea,estado, valor, fecha}
        agregarDocumento(objTarea, boolTareaRecurrente);
        setSwitchModal(false);
    }

    const handleClickBtnCerrar = () =>{
        setSwitchModal(false);
    }

    if (!modalContainer) return null;

    return ReactDOM.createPortal(
        <ContenedorModalStyled switchModal={switchModal}>
            <ContenedorFormulario onSubmit={handleSubmit}>
                <ContenedorInputs>
                
                    <BtnCerrarModalStyled onClick={() => handleClickBtnCerrar()} > <IoCloseOutline /> </BtnCerrarModalStyled>
                    <Titulo>Ingresa una Tarea</Titulo>

                    <InputToDoGenerico id='Descripción' txt = 'Descripción' type='text' setEstado = {setTxtTarea} />
                    
                    <ContenedorHorizontal>
                        <InputToDoSelectorBool vertical={"vertical"} txt = "Es recurrente?" bool = {boolTareaRecurrente} setBoolTareaRecurrente = {setBoolTareaRecurrente}/>
                        <InputToDoDate id='Fecha' txt = 'Fecha' type='date' vertical  bool  = {boolTareaRecurrente} setEstado = {setFecha} />
                    </ContenedorHorizontal>

                    <InputToDoRange id='Descripción' txt = 'Importancia' valor= {valor} setValor={setValor} vertical />

                </ContenedorInputs>

                <BtnSubmit type='submit' > Agregar </BtnSubmit>
                

            </ContenedorFormulario>
        </ContenedorModalStyled>,
        modalContainer
    );
};
