import { useState } from "react";

function JobCounter() {

    const [jobCount, setJobCount] = useState(0);

    function handleJobAdd() {
        setJobCount(prevCount => prevCount + 1);
    }

    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px]">
            <h1 className="text-2xl">Job Counter</h1>
            <p>Count: {jobCount}</p>
            <button className="border-2 rounded-md p-2" onClick={handleJobAdd}>Add a Job</button>
        </div>
    )
}

export default JobCounter;