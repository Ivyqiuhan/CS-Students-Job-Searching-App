import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';

export default function Jobs() {

    const [jobs, getJobs] = useState('');

    const url = 'http://localhost:8080/jobs';

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log('This is your data', response);
                const allJobs = response.data;
                getJobs(allJobs);
            })
            .catch(error => console.error('Getting jobs error'));

    }, [])


    return (
        <Job jobs={jobs}/>
    )
}
