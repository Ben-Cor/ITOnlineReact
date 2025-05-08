import JobItem from "./JobItem";

export default function JobList({ jobs, onTriggerJob, onDeleteJob }) {

    const textColour = (status) => { 
        return status === "active" ? "text-green-700" : "text-red-500";
    }
    
    return (
        <ul className="flex flex-wrap items-center justify-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4">
            {jobs.map((job) => (
                <li key={job.id} className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px] border-2">
                    <h2 className="text-2xl">{job.name}</h2>
                    <p>{job.description}</p>
                    <p className={textColour(job.status)}>Status: {job.status}</p>
                    <button className="p-2 border-2 rounded-md" onClick={() => onTriggerJob(job.id)}>Trigger Job</button>
                    <button className="p-2 border-2 rounded-md" onClick={() => onDeleteJob(job.id)}>Delete Job</button>
                </li>
            ))}
        </ul>
    );
}