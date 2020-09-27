import React from 'react';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardTask from './cardTask';

class TasksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loading: true,
            error: null,
        }
    }

    async componentDidMount(){
        await this.getAllTasks();
    }

    getAllTasks = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/tasks')
            let data = await res.json()
            this.setState({
                tasks: data,
                loading: false
            });
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    handleStatusOk = async (value)=> {
        let task = {
            id: value.id,
            title: value.title,
            completed: '1'
        }
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }

            await fetch('http://localhost:8000/api/updateTask', config)
            await this.fetchTasks();
        } catch (error) {
            this.setState({
                loading: false,
                error
            })            
        }
    }

    handleDeleteTask = async (value)=> {
        let task = {
            id: value.id
        }
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }
            await fetch('http://localhost:8000/api/deleteTask', config);
            await this.fetchTasks();
        } catch (error) {
            this.setState({
                loading: false,
                error
            })            
        }
    }

    render(){
        return (
            <div>
                <div className="bg-white py-3 mt-3 shadow-sm rounded">
                    <div className="row mb-3 px-5">
                        <div className="col-12">
                            <h4 className="text-info"><FontAwesomeIcon icon={faTasks} /><span className="ml-3">Lista de tareas</span></h4>
                        </div>
                    </div>

                    {
                        this.state.tasks.map((task) => {
                            return (
                                <CardTask
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    completed={task.completed}
                                    propStatusOK={() => this.handleStatusOk(task)}
                                    propDeleteTask={() => this.handleDeleteTask(task)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TasksList;