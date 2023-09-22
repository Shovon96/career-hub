import { NavLink, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams();
    const idInt= parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <div className="grid md:grid-cols-6 gap-4 my-16">
                <div className="md:col-span-4 border p-6">
                    <p><span className="font-bold text-lg">Job Description: </span>{job.job_description}</p>
                    <p className="mt-4"><span className="font-bold text-lg">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="mt-4"><span className="font-bold text-lg">Job Requirements: </span>{job.educational_requirements}</p>
                    <p className="mt-4"><span className="font-bold text-lg">Experiences: </span>{job.experiences}</p>
                </div>
                <div className="md:col-span-2 border p-4 shadow-md shadow-gray-400 bg-slate-100">
                    <h3 className="text-lg font-bold">Job Details</h3>
                    <hr />
                    <p><span className="text-lg font-bold">Salary: </span>{job.salary}</p>
                    <p><span className="text-lg font-bold my-2">Job Title: </span>{job.job_title}</p>
                    <h3 className="text-xl font-bold my-3">Contact Information</h3>
                    <hr />
                    <p><span className="text-lg font-bold my-2">Phone: </span>{job.contact_information.phone}</p>
                    <p><span className="text-lg font-bold my-2">Email: </span>{job.contact_information.email}</p>
                    <p><span className="text-lg font-bold my-2">Address: </span>{job.contact_information.address}</p>
                    <NavLink>
                        <button className="btn btn-primary w-full mt-4">Apply Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;