
import { useContext, useState } from "react";
import { BtnToDo } from "./ComponentesTodo/BtnAgregarTodo"
import { ItemToDoList } from "./ComponentesTodo/ToDoItem"
import styled from "styled-components";
import { ContextoGeneral } from "../../ContextoGeneral";

const ContenedorTemporal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 600px;
    max-width: 90%;
    min-height: 600px;

    border: 4px solid var(--color-blanco-transparente);
    padding: 20px;
    border-radius: 20px;
`;
const ContenedorTareas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

`;



export const ToDoUx = () => {
    const { tareas, actualizarDocumento } = useContext(ContextoGeneral);
    const [tareasModificadas, setTareasModificadas] = useState([]);

    const registrarCambio = (tareaModificada) => {
        setTareasModificadas((prevState) => {
            const existe = prevState.find((tarea) => tarea.id === tareaModificada.id);
            if (existe) {
                return prevState.map((tarea) =>
                    tarea.id === tareaModificada.id ? tareaModificada : tarea
                );
            } else {
                return [...prevState, tareaModificada];
            }
        });
        console.log(tareasModificadas);
    };

    const handleSincronizar = () => {
        tareasModificadas.forEach((tarea) => {
            actualizarDocumento(tarea.id, tarea.boolTareaRecurrente, tarea);
        });

        // Limpiar el estado después de sincronizar
        setTareasModificadas([]);
    };

    return (
        <ContenedorTemporal>
            <BtnToDo fn={1} txt="Agregar Tarea" />

            <ContenedorTareas>
                {tareas.tareasRecurrentes.map((tarea) => (
                    <ItemToDoList
                        key={tarea.id}
                        tarea={tarea}
                        color={true}
                        registrarCambio={registrarCambio}
                    />
                ))}

                {tareas.tareasDiaria.map((tarea) => (
                    <ItemToDoList
                        key={tarea.id}
                        tarea={tarea}
                        registrarCambio={registrarCambio}
                    />
                ))}
            </ContenedorTareas>

            <BtnToDo fn={handleSincronizar} txt="Sincronizar" /> {/* Aquí pasas la función */}
        </ContenedorTemporal>
    );
};
