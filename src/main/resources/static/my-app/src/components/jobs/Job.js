import React from 'react';
import "./Job.css";

export default function Job (props) {
    const displayJobs = (props) => {
        const {menu, jobs} = props;
        if (jobs.length > 0) {
            return(
                <div className="all-jobs">
                <div className="jobs-header"> Jobs </div>

                <div className="jobs-container">
                    {jobs.map(job => {
                        // todo remove console.log for testing filter
                        console.log("printing filters");
                        console.log(props.companyFilter);
                        console.log(job.company);

                        if ((props.companyFilter === job.company || props.companyFilter === '')
                            && (props.locationFilter === job.location || props.locationFilter === '')
                            && (props.commitmentFilter === job.commitment || props.commitmentFilter === '')) {
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

                                    <div className="job-link">
                                        {job.url}
                                    </div>

                                </div>
                            )
                        }
                        //todo remove console.log, for testing filter
                        else {
                            console.log("didn't print")
                        }

                        })
                    }
                </div>
            </div>
            )} else {
                return (
                    <div className="no-job-container">
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