import React, {MouseEvent} from 'react';
import styles from "../Todolist.module.css"
import {FilterType} from "../../App";

type ButtonFilterType = {
    name: string
    handleButtonFiltered: (value: MouseEvent<HTMLButtonElement>) => void
    filter: FilterType
}

export const ButtonFilter = ({name, handleButtonFiltered, ...props}: ButtonFilterType) => {
    return (
        <>
            <button onClick={handleButtonFiltered}
                    className={props.filter === name ? styles.filterActive : ''}>
                {name}
            </button>
        </>
    );
};
