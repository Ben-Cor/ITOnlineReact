import { useState } from "react";
import JobList from "./JobList";
import StatusBoard from "./StatusBoard";
import JobForm from "./JobForm";

export default function JobItem() {
    const [bots, setBots] = useState([
        { id: 1, name: "Email Extractor", description: "Extracts emails from text", status: "Completed" },
        { id: 2, name: "Data Scraper", description: "Scrapes data from websites", status: "In Progress" },
        { id: 3, name: "Sentiment Analyzer", description: "Analyzes sentiment of text", status: "Failed" },
        { id: 4, name: "Keyword Extractor", description: "Extracts keywords from text", status: "Completed" },
        { id: 5, name: "Text Summarizer", description: "Summarizes text", status: "In Progress" },
    ]);

    const [newBot, setNewBot] = useState({
        id: "",
        name: "",
        description: "",
        status: "Failed"
    });

    const [show, setShow] = useState(false);

    function handleTriggerJob(id) {
    setBots((prevBots) =>
        prevBots.map((bot) =>
            bot.id === id
                ? {
                        ...bot,
                        status:
                            bot.status === "Completed"
                                ? "In Progress"
                                : bot.status === "In Progress"
                                ? "Failed"
                                : "Completed",
                    }
                : bot
        )
    );
    }

    function handleDeleteJob(id) {
        setBots(bots.filter((bot) => bot.id !== id));
    }

    function addBotToList(e) {
        e.preventDefault();
        if (newBot.name && newBot.description) {
            setBots((prevBots) => [
                // get previous bots
                ...prevBots,
                // add new bot to the list
                {
                    id: Date.now(),
                    name: newBot.name,
                    description: newBot.description,
                    status: newBot.status,
                },
            ]);
            // reset the new bot object to its initial state
            setNewBot({
                id: "",
                name: "",
                description: "",
                status: "Failed",
            });
        } else {
            alert("Please fill in all fields");
        }
    }

    const completedJobs = bots.filter((bot) => bot.status === "Completed").length;
    const inProgressJobs = bots.filter((bot) => bot.status === "In Progress").length;
    const failedJobs = bots.filter((bot) => bot.status === "Failed").length;

    return (
        <div className="bg-neutral-200">
            <JobForm addBotToList={addBotToList} setNewBot={setNewBot} newBot={newBot}/>
            <button className="border-2 p-2 rounded-md flex justify-center items-center w-full hover:bg-neutral-600 hover:text-white" onClick={() => setShow(!show)}>
                Click to show/hide Jobs
            </button>
            {show && (
                <JobList
                    jobs={bots}
                    onTriggerJob={handleTriggerJob}
                    onDeleteJob={handleDeleteJob}
                />
            )}
            <StatusBoard completed={completedJobs} inProgress={inProgressJobs} failed={failedJobs}/>
        </div>
    );
}