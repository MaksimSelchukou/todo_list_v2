import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import styles from './AddItemForm.module.css'

type AddItemFormType = {
    callBack: (titleTask: string) => void
    name: string
}

export const AddItemForm = (props: AddItemFormType) => {

    const [titleTask, setTitleTask] = useState('')

    const [error, setError] = useState<null | string>(null)

    const handleAddTask = () => {
        if (titleTask.trim() !== '') {
            props.callBack(titleTask.trim())
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
        <>
            <input
                value={titleTask}
                className={error ? styles.error : ''}
                type="text"
                onChange={onchangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={handleAddTask}>{props.name}</button>
            {error && <div className={styles.errorText}>{error}</div>}

        </>
    );
};

