import React, { useEffect, useState } from 'react';

import './ProjectItem.css';

import ProjectDetailsModal from "../Modals/ProjectDetailsModal/ProjectDetailsModal";

const ProjectItem = (props) => {

    const [projectStatus, setStatus] = useState('Unknown');

    const [projectDetailsModal, setProjectDetailsModal] = useState(false);

    const openProjectDetailsModal = () => {
        setProjectDetailsModal(true);
    }

    const closeProjectDetailsModal = () => {
        setProjectDetailsModal(false);
    }

    useEffect(() => {
        switch (props.status.toString()) {
            case "0":
                setStatus('Ativo');
                break;
            case "1":
                setStatus('Finalizado');
                break;
            case "2":
                    setStatus('Cancelado');
                    break;
            default:
                setStatus('Desconhecido');
        }
    }, [props.status]);
    

    return (
        <div className='project-list-item'>
            <div className='project-left-info'>
                <h4>{props.name}</h4>
                <p>{props.educationInstitution}</p>
                <p className="description">{props.description}</p>
                <p>{props.fundingGoal}</p>
            </div>
            <div className='project-right-info'>
                <p className={'project-item-status ' + projectStatus}>{projectStatus}</p>
                <button onClick={openProjectDetailsModal} className='project-details-button'>Detalhes</button>
            </div>

            {projectDetailsModal && 
            <ProjectDetailsModal 
            {...props} 
            closeProjectDetailsModal={closeProjectDetailsModal}
            status = {projectStatus}
            />}
        </div>
        
        
    );
};

export default ProjectItem;
