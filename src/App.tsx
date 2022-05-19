import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {darkTheme, GlobalStyles, lightTheme} from "./theme";
import {ThemeProvider} from "styled-components";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Switch, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksType = {
    [key: string]: Array<TaskType>
}

export type TodolistItemType = {
    id: string
    title: string
    filter: FilterType
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const todolistId1 = v1();
    const todolistId2 = v1();
    const [todolists, setTodolists] = useState<Array<TodolistItemType>>([
        {id: todolistId1, title: "TodoListsOne", filter: 'all'},
        {id: todolistId2, title: "TodoListsSecond", filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TasksType>({
            [todolistId1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rfdfd", isDone: true},
                {id: v1(), title: "RefdfdactJS", isDone: false},
                {id: v1(), title: "ReacfdfdtJS", isDone: false},
            ],
            [todolistId2]: [
                {id: v1(), title: "Docer", isDone: true},
                {id: v1(), title: "TypeScript", isDone: false},
                {id: v1(), title: "Angular", isDone: false},
                {id: v1(), title: "JAVA", isDone: true},
            ]
        }
    )

    const addTask = (todoId: string, titleTask: string) => {
        const newTask: TaskType = {id: v1(), title: titleTask, isDone: false}
        setTasks({...tasks, [todoId]: [newTask, ...tasks[todoId]]})
    }

    const deleteTask = (todoId: string, taskId: string) => {
        setTasks({...tasks, [todoId]: tasks[todoId].filter(t => t.id !== taskId)})
    }

    const changeStatusTask = (todoId: string, taskId: string, status: boolean) => {
        setTasks({...tasks, [todoId]: tasks[todoId].map(m => m.id === taskId ? {...m, isDone: status} : m)})
    }

    const changeTaskTitle = (todoId: string, taskId: string, titleTask: string) => {
        setTasks({...tasks, [todoId]: tasks[todoId].map(t => t.id === taskId ? {...t, title: titleTask} : t)})
    }

    const sortTasks = (todoId: string, value: FilterType) => {
        setTodolists(todolists.map(t => t.id === todoId ? {...t, filter: value} : t))

        // let todolist = todolists.filter(t => t.id === todoId);
        // if (todolist) {
        //     todolist[0].filter = value
        //     setTodolists([...todolists])
        // }

        // let todolist = todolists.find(t => t.id === todoId);
        // if (todolist) {
        //     todolist.filter = value
        //     setTodolists([...todolists])
        // }
    }

    const addTodolist = (titleTodo: string) => {
        const todolist: TodolistItemType = {
            id: v1(),
            title: titleTodo,
            filter: "all"
        }
        setTodolists([todolist, ...todolists])
        setTasks({...tasks, [todolist.id]: []})
    }

    const removeTodolist = (todoId: string) => {
        setTodolists(todolists.filter(t => t.id !== todoId))
        delete tasks[todoId]
        setTasks(tasks)
    }

    const changeTodolistTitle = (todoId: string, titleTodolist: string) => {
        setTodolists(todolists.map(t=>t.id === todoId ? {...t,title:titleTodolist}:t))
    }

    const [tem, setTheme] = useState("light");

    const switchTheme = () => {
        tem === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <ThemeProvider theme={tem === "light" ? lightTheme : darkTheme}>
            {/*<div>*/}
            {/*    <h1>Переключить тему</h1>*/}
            {/*    <button onClick={switchTheme}>Switch Theme</button>*/}
            {/*</div>*/}

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <span>Темная тема</span>
                    <Switch
                        color={'default'}
                        onChange={switchTheme}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <GlobalStyles/>
                <h1>Добавить тудулист</h1>
                <Grid container style={{padding:'20px'}}>
                    <Paper style={{padding:'3px'}}>
                    <AddItemForm addItem={addTodolist} />
                    </Paper>
                </Grid>

                <div className="App">
                    <Grid container spacing={3}>
                        {

                            todolists.map((tl) => {
                                let filteredTasks = tasks[tl.id]
                                if (tl.filter === 'completed') {
                                    filteredTasks = filteredTasks.filter(f => f.isDone)
                                }
                                if (tl.filter === 'active') {
                                    filteredTasks = filteredTasks.filter(f => !f.isDone)
                                }
                                return (
                                    <Grid item>
                                        <Paper style={{padding:'10px'}}>
                                            <Todolist
                                                key={tl.id}
                                                todoId={tl.id}
                                                title={tl.title}
                                                tasks={filteredTasks}
                                                deleteTask={deleteTask}
                                                addTask={addTask}
                                                changeStatusTask={changeStatusTask}
                                                sortTasks={sortTasks}
                                                filter={tl.filter}
                                                removeTodolist={removeTodolist}
                                                changeTaskTitle={changeTaskTitle}
                                                changeTodolistTitle={changeTodolistTitle}
                                            />
                                        </Paper>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default App;
