import React, {MouseEvent} from 'react';
import styles from "../Todolist.module.css"
import {FilterType} from "../../App";
import {Button, ButtonGroup} from "@mui/material";

type ButtonFilterType = {
    name: string
    handleButtonFiltered: (value: MouseEvent<HTMLButtonElement>) => void
    filter: FilterType
}

export const ButtonFilter = ({name, handleButtonFiltered, ...props}: ButtonFilterType) => {
    return (
        <>
            <ButtonGroup size="small" variant={'text'} aria-label="outlined primary button group">
                {/*<Button onClick={handleButtonFiltered}*/}
                {/*        className={props.filter === name ? styles.filterActive : ''}>*/}
                {/*    {name}*/}
                {/*</Button>*/}
                <Button onClick={handleButtonFiltered}
                        variant={props.filter === name ? 'contained' : 'text'}>
                    {name}
                </Button>
            </ButtonGroup>
        </>
    );
};
