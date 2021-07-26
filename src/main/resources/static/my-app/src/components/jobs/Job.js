import React from 'react';
import "./Job.css";

export default function Job (props) {
    const displayJobs = (props) => {
        const {menu, jobs} = props;

        if (jobs.length > 0) {
            return(
                <div>
                <div className="jobs-header"> Jobs </div>

                <div className="jobs-container">
                    {jobs.map(job => {
                        return (
                            <div className="jobs">
                                <div className="job-title">
                                    <a href={job.url}>
                                        {job.jobTitle}
                                    </a>
                                </div>
                        
                                <div className="job-company">
                                    {job.company}
                                </div>

                                <div className="job-description">
                                    {job.postDescription}
                                </div>
                        
                                <div className="job-source">
                                    {job.source}
                                </div>
                        
                            </div>
                        )
                        })} 
                </div>
            </div>
            )} else {
                return (
                    <div>
                        No jobs
                    </div>
                )
            }
    }

    return (
        <div>
            {displayJobs(props)}
        </div>
    )
}