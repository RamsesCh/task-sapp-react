import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTrashAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';


class CardTask extends React.Component{
    
    render(){
        let classStatus = 'badge badge-pill';
        let statusTask = '';
        let stylesTaskOk = '';

        if (this.props.completed === '1') {
            classStatus += ' badge-success';
            statusTask = 'Completada';
            stylesTaskOk = 'line-through';
        } else {
            classStatus += ' badge-warning';
            statusTask = 'Pendiente';
            stylesTaskOk = 'none'
        }
        return (
            <div className="row px-5 mb-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" /> 
                                <span style={{textDecoration: stylesTaskOk}}>{this.props.title}</span>
                            </h5>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                   <span className={classStatus}>{statusTask}</span> 
                                </div>
                                
                                <div>
                                    <button type="button" className="btn btn-outline-success btn-sm mr-3" onClick={this.props.propStatusOK}><FontAwesomeIcon icon={faCheckCircle}/></button>
                                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.props.propDeleteTask}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTask;