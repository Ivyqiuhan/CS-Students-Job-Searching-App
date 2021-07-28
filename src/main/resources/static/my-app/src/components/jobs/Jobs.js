import React, { useState, useEffect } from 'react';
import Job from './Job';

export default function Jobs(props) {
    const [jobs, getJobs] = useState('');
    useEffect(() => {
        getJobs(props.jobs);
    }, [])


    return (
        <Job jobs={jobs}
             companyFilter={props.companyFilter}
             locationFilter={props.locationFilter}
             commitmentFilter={props.commitmentFilter}
        />
    )
}
