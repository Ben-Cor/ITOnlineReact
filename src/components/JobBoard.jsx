function JobBoard() {
    const jobCount = 10;
    const companyName = "Tech Corp";

    const getJobMessage = () => {
        if (5 > jobCount > 0) {
            return `Jobs running today from bot: ${jobCount}`;
        } else if (jobCount > 5) {
            return `Lots of jobs today! Current availability is: ${jobCount}`;
        } else {
            return `No jobs to schedule today.`;
        }
    }

    return (
    <div>
        <h1 className="text-2xl">{companyName}</h1>
        <p>{getJobMessage()}</p>
    </div>
    )
}

export default JobBoard