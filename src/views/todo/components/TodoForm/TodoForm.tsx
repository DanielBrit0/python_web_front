import React, { useState } from "react";
import Grid from "../../../../components/Grid";
import IconButton from "../../../../components/iconButton";
import { PaddingBottom } from "./TodoForm.style";
import { useTodo } from "../../../../features/todo"

const TodoForm = () => {

    const { add, search } = useTodo()
    const [name, setDescription] = useState<string>('')
    const { refetch } = search('')
    const clear = () => {
        setDescription("")
        refetch()
    }
    const addChore = async () => {
        await add(name)
        refetch()
        setDescription("")
    }

    return (
        <PaddingBottom role="form">
            <Grid cols="12 9 10" >
                <input
                    type=""
                    style={{ marginBottom: 10 }}
                    className='form-control'
                    placeholder='Adicionar uma tarefa'
                    onChange={(e) => setDescription(e.target.value)}
                    value={name} />
            </Grid>
            <Grid cols="12 3 2">
                <>
                    <IconButton

                        style='primary'
                        icon='plus'
                        onClick={() => addChore()}
                    ></IconButton>
                    {/* <IconButton

                        style='info'
                        icon='search'
                        onClick={() => search(name)}
                    ></IconButton> */}
                    <IconButton

                        style='default'
                        icon='close'
                        onClick={() => clear()}
                    ></IconButton>
                </>
            </Grid>
        </PaddingBottom>
    )

}

export default TodoForm;