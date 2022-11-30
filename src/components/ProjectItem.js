import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = (props) => {
    const { image, name, id } = props;
    const navigate = useNavigate();

    return (
        <div
            className="projectItem"
            onClick={() => { navigate("/project/" + id) }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage"></div>
            <h2>{name}</h2>
        </div>
    );
};

export default ProjectItem;