import Project from '../../models/Project.js';
import React, { useState } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([new Project("Project 1", "Lorem Ispsum 1"), new Project("Project 2", "Lorem Ispsum 2"), new Project("Project 3", "Lorem Ispsum 3")])

    return (
        <div className="bg-success text-dark">
            <p className="display-1 d-flex justify-content-center">Projects</p>
            <p className="display-3 d-flex justify-content-center">Here is a list of Petar's projects:</p>
            <ul>
                {projects.map((x, index) => <li key={index}><p>{x.title}</p><p>{x.description}</p></li>)}
            </ul>
        </div>
    )
}