import { useState } from "react";

function JobCounter() {

    const [jobCount, setJobCount] = useState(0);
    const [jobMessage, setJobMessage] = useState("");

    function handleJobAdd() {
        setJobCount(jobCount + 1);
        setJobMessage("Job added!");
    }

    function handleJobRemove() {
        if (jobCount > 0) {
            setJobCount(jobCount - 1);
            setJobMessage("Job removed!");
        }
    }

    function handleJobReset() {
        setJobCount(0);
        setJobMessage("Job count reset!");
    }

    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px]">
            <h1 className="text-2xl">Job Counter</h1>
            <p>Count: {jobCount}</p>
            <button className="border-2 rounded-md p-2" onClick={handleJobAdd}>Add a Job</button>
            <button className="border-2 rounded-md p-2" onClick={handleJobRemove}>Remove a job</button>
            <button className="border-2 rounded-md p-2" onClick={handleJobReset}>Reset</button>
            <p className="text-red-500">{jobMessage}</p>
        </div>
    )
}

export default JobCounter;