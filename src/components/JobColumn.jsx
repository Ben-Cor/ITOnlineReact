import { useState } from "react";
import JobStatus from "./JobStatus";

export default function JobForm({title, image, imageAlt}) {

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

    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 border-2">
            <h2 className="text-2xl text-center">{title}</h2>
            <img className="w-[300px] h-[300px] mt-4" src={image} alt={imageAlt} />
            <JobStatus task={"Test task here - this will be updated later"} deleteJob={deleteJob}/>
        </div>
    );
}