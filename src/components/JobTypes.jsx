import importantIcon from '../assets/important.svg';
import inProgress from '../assets/in-progress.svg';
import completed from '../assets/completed.svg';
import JobColumn from '../components/JobColumn';
import { useState } from 'react';
import FormButton from './FormButton';

export default function JobTypes() {
    const [jobs, setJobs] = useState([
        { id: 1, name: "Email Extractor", description: "Extracts emails from text", status: "Important", categories: ["Read Mails", "Web Parsing"] },
        { id: 2, name: "Data Scraper", description: "Scrapes data from websites", status: "In Progress", categories: ["Send Mail", "Web Parsing"] },
        { id: 3, name: "Sentiment Analyzer", description: "Analyzes sentiment of text", status: "Completed", categories: ["Read Mails", "Web Parsing"] },
        { id: 4, name: "Keyword Extractor", description: "Extracts keywords from text", status: "Important", categories: ["Send Mail", "Web Parsing"] },
        { id: 5, name: "Text Summarizer", description: "Summarizes text", status: "In Progress", categories: ["Send Mail", "Read Mails"] },
    ]);

    // State for form inputs
    const [formInputs, setFormInputs] = useState({
        name: "",
        description: "",
        status: "Important", // Default status
        categories: [],
    });

    const deleteJob = (id) => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    };

    const changeStatus = (id, event) => {
        const newStatus = event.target.value;
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job.id === id ? { ...job, status: newStatus } : job
            )
        );
    };

    function addJob(e) {
        e.preventDefault(); // Prevent form submission from reloading the page
        if (formInputs.name && formInputs.description) {
            const newJob = {
                id: jobs.length + 1, 
                name: formInputs.name,
                description: formInputs.description,
                status: formInputs.status,
                categories: formInputs.categories,
            };
            setJobs((prevJobs) => [...prevJobs, newJob]); // Add the new job to the jobs array
            setFormInputs({ name: "", description: "", status: "In Progress", categories: [] }); // Reset the form inputs
        } else {
            alert("Please fill in all fields");
        }
    }

    const handleInputChange = (e) => {
        //get the id and target from the event 
        const { id, value } = e.target;
        setFormInputs((prevInputs) => ({
            ...prevInputs,
            //updated the value which matches the id
            [id]: value, 
        }));
    };

    const handleCategoryChange = (category) => {
        setFormInputs((prevInputs) => ({
            ...prevInputs,
            categories: prevInputs.categories.includes(category)
                ? prevInputs.categories.filter((cat) => cat !== category) // Remove category if it exists
                : [...prevInputs.categories, category], // Add category if it doesn't exist
        }));
    };

    const currentCategories = () => {
        return formInputs.categories.length > 0
            ? formInputs.categories.join(', ')
            : "No categories selected";
    };

    return (
        <div className="mb-20">
            <h1 className="text-3xl text-center font-bold mt-6">Add a Job</h1>
            <form
                className="flex flex-col gap-4 m-5 justify-center items-center"
                onSubmit={addJob} // Call addJob on form submission
            >
                <div className='flex gap-4'>
                     <input
                        onChange={handleInputChange}
                        value={formInputs.name}
                        className="border-2 border-blue-500 p-2"
                        type="text"
                        id="name"
                        placeholder="Job Name"
                    />
                    <input
                        onChange={handleInputChange}
                        value={formInputs.description}
                        className="border-2 border-blue-500 p-2"
                        type="text"
                        id="description"
                        placeholder="Job Description"
                    />
                    <select
                        onChange={handleInputChange}
                        value={formInputs.status}
                        className="border-2 border-blue-500 p-2"
                        id="status"
                    >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Important">Important</option>
                    </select>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <p>Categories: </p>
                    <FormButton value={"Read Mails"} onClick={() => handleCategoryChange("Read Mails")} />
                    <FormButton value={"Send Mail"} onClick={() => handleCategoryChange("Send Mail")} />
                    <FormButton value={"Web Parsing"} onClick={() => handleCategoryChange("Web Parsing")} />
                </div>
                <p>Current Categories: {currentCategories()}</p>
                <button
                    type="submit"
                    className="border-2 border-blue-500 p-2 bg-blue-500 text-white rounded-md"
                >
                    Add Job
                </button>
                
            </form>
            <JobColumn
                title={"Important"}
                image={importantIcon}
                imageAlt={"importantIcon"}
                deleteJob={deleteJob}
                changeStatus={changeStatus}
                jobs={jobs}
            />
            <JobColumn
                title={"In Progress"}
                image={inProgress}
                imageAlt={"In Progress"}
                deleteJob={deleteJob}
                changeStatus={changeStatus}
                jobs={jobs}
            />
            <JobColumn
                title={"Completed"}
                image={completed}
                imageAlt={"Completed"}
                deleteJob={deleteJob}
                changeStatus={changeStatus}
                jobs={jobs}
            />
        </div>
    );
}