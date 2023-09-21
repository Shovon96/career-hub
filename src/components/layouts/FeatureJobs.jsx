import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs);
    return (
        <div>
            <div className="text-center mt-8">
                <h1 className="text-5xl font-bold">Featured Jobs</h1>
                <p className="text-sm text-gray-400 my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-8 my-16">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;