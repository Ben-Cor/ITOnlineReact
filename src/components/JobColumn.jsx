import JobStatus from "./JobStatus";

export default function JobForm({ title, image, imageAlt, deleteJob, jobs, changeStatus }) {
    // Filter jobs based on the title matching the job's status
    const filteredJobs = jobs.filter((job) => job.status === title);

    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 border-2">
            <h2 className="text-2xl text-center">{title}</h2>
            <img className="w-[300px] h-[300px] mt-4" src={image} alt={imageAlt} />
            {/* Render a JobStatus component for each filtered job */}
            {filteredJobs.map((job) => (
                <JobStatus
                    key={job.id} // Use a unique key for each JobStatus
                    task={job.name} // Pass the job name as the task
                    deleteJob={deleteJob} // Pass the deleteJob function
                    changeStatus = {changeStatus} // Pass the job status
                    job={job} // Pass the entire job object
                />
            ))}
        </div>
    );
}