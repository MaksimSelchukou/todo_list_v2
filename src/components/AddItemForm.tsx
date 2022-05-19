import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {ControlPoint} from "@mui/icons-material";

type AddItemFormType = {
    addItem: (titleTask: string) => void

}

export const AddItemForm = (props: AddItemFormType) => {

    const [titleTask, setTitleTask] = useState('')

    const [error, setError] = useState<null | string>(null)

    const handleAddTask = () => {
        if (titleTask.trim() !== '') {
            props.addItem(titleTask.trim())
            setTitleTask('')

        } else {
            setError('Title is required')
        }

    }

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitleTask(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTask()
        }
    }

    return (
        <div>
            <TextField
                error={!!error}
                label="Введите назв. таски"
                helperText={error}
                size={"small"}
                value={titleTask}
                type="text"
                onChange={onchangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <IconButton  color={'primary'} size={'medium'}  onClick={handleAddTask}><ControlPoint/></IconButton>
            {/*{error && <div className={styles.errorText}>{error}</div>}*/}

        </div>
    );
};

