import importantIcon from '../assets/important.svg'
import inProgress from '../assets/in-progress.svg'
import completed from '../assets/completed.svg'
import JobColumn from '../components/JobColumn'
import { useState } from 'react';

export default function JobTypes() {
        const [jobs, setJobs] = useState([
        {id: 1, name: "Email Extractor", description: "Extracts emails from text", status: "Important" },
        {id: 2, name: "Data Scraper", description: "Scrapes data from websites", status: "In Progress" },
        {id: 3, name: "Sentiment Analyzer", description: "Analyzes sentiment of text", status: "Completed" },
        {id: 4, name: "Keyword Extractor", description: "Extracts keywords from text", status: "Important" },
        {id: 5, name: "Text Summarizer", description: "Summarizes text", status: "In Progress" },
    ]);

    const deleteJob = (id) => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    }

    const changeStatus = (id, event) => {
        const newStatus = event.target.value; // Get the new status from the select element
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job.id === id ? { ...job, status: newStatus } : job
            )
        )};

    return (
        <div className='mb-20'>
            <JobColumn title={'Important'} image={importantIcon} imageAlt={'importantIcon'} deleteJob={deleteJob} changeStatus={changeStatus} jobs={jobs}/>
            <JobColumn title={'In Progress'} image={inProgress} imageAlt={'In Progress'} deleteJob={deleteJob} changeStatus={changeStatus} jobs={jobs}/>
            <JobColumn title={'Completed'} image={completed} imageAlt={'Completed'} deleteJob={deleteJob} changeStatus={changeStatus} jobs={jobs} />
        </div>
);
}