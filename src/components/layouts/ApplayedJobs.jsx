import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStrorage";

const ApplayedJobs = () => {

    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = (filter) => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])


    return (
        <>
            {/* sort by button */}
            <div className="flex justify-end">
                <details className="dropdown mt-3">
                    <summary className="m-1 btn">Filter By..</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Sort by Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Sort by Onsite</a></li>
                    </ul>
                </details>
            </div>
            {/* Applayed Jobs Cards */}
            <div className="my-12">
                {
                    displayJobs.map(job =>
                        <div key={job.id}>
                            <div className="card card-compact p-6 bg-base-100 grid grid-cols-5 items-center gap-4 my-4 shadow-xl border border-purple-700">
                                <div className="col-span-1">
                                    <figure><img src={job.logo} alt="" /></figure>
                                </div>
                                <div className="card-body col-span-3">
                                    <p className="text-xl"><span className="font-bold">Job Id:</span> {job.id}</p>
                                    <h2 className="card-title text-2xl font-bold">{job.job_title}</h2>
                                    <p className="text-xl text-gray-500">{job.company_name}</p>
                                    <div>
                                        <button className="px-6 py-3 font-semibold border border-[#7E90FE] text-[#7E90FE] rounded-md mr-2">{job.remote_or_onsite}</button>
                                        <button className="px-6 py-3 font-semibold border border-[#7E90FE] text-[#7E90FE] rounded-md ml-2">{job.job_type}</button>
                                    </div>
                                    <div className="flex text-base font-semibold gap-12 my-2">
                                        <span>{job.location}</span>
                                        <span>Salary: {job.salary}</span>
                                    </div>
                                </div>
                                <div className="card-actions col-span-1">
                                    <NavLink to={`/jobDetails/${job.id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default ApplayedJobs;