import React, {useState} from 'react';
import './App.css';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])


    return (
        <div className="App">
            Create Todolist!
        </div>
    );
}

export default App;
