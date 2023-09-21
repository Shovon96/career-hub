import { GrLocation } from "react-icons/Gr";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact p-6 bg-base-100 shadow-xl border border-purple-700">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{job_title}</h2>
                <p className="text-xl text-gray-500">{company_name}</p>
                <div>
                    <button className="px-6 py-3 font-semibold border border-[#7E90FE] text-[#7E90FE] rounded-md mr-2">{remote_or_onsite}</button>
                    <button className="px-6 py-3 font-semibold border border-[#7E90FE] text-[#7E90FE] rounded-md ml-2">{job_type}</button>
                </div>
                <div className="flex text-base font-semibold gap-12 my-2">
                    <span><GrLocation></GrLocation>{location}</span>
                    <span>Salary: {salary}</span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;