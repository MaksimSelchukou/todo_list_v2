import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    title: string
    onChange:(value:string)=>void
}

export const EditableSpan = (props: PropsType) => {

    const [on, setOn] = useState(false)
    const [title, setTitle] = useState(props.title)


    const handleClick = () => {
        setOn(!on)
    }

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
        props.onChange(title)
    }


    // const handleDblClick = () => {
    //     setOn(!on)
    // }
    //
    // const handleOffInput = () => {
    //     setOn(!on)
    // }

    return (
        on === true ? <input onChange={handleOnChange} value={title} autoFocus onBlur={handleClick}/> :
            <span onDoubleClick={handleClick}>{props.title}</span>
    );
};

