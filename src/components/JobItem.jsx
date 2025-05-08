import { useState } from "react";
import JobList from "./JobList";

export default function JobItem() {
    const [bots, setBots] = useState([
        { id: 1, name: "Email Extractor", description: "Extracts emails from text", status: "active" },
        { id: 2, name: "Data Scraper", description: "Scrapes data from websites", status: "inactive" },
        { id: 3, name: "Sentiment Analyzer", description: "Analyzes sentiment of text", status: "active" },
        { id: 4, name: "Keyword Extractor", description: "Extracts keywords from text", status: "inactive" },
        { id: 5, name: "Text Summarizer", description: "Summarizes text", status: "active" },
    ]);

    const [newBot, setNewBot] = useState({
        id: "",
        name: "",
        description: "",
        status: "inactive"
    });

    const [show, setShow] = useState(false);

    function handleTriggerJob(id) {
        setBots((prevBots) =>
            prevBots.map((bot) =>
                bot.id === id
                    ? { ...bot, status: bot.status === "active" ? "inactive" : "active" }
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
                status: "inactive",
            });
        } else {
            alert("Please fill in all fields");
        }
    }

    return (
        <div>
            <form action="" className="mt-4">
                <input 
                className="border-2 p-2 rounded-md mx-4" 
                type="text" name="botName" 
                placeholder="Bot Name" 
                id="botName" 
                value={newBot.name} 
                onChange={(e) => setNewBot({...newBot, name: e.target.value})}
                />
                <input 
                className="border-2 p-2 rounded-md mx-4" 
                type="text" name="botDescription" 
                placeholder="Bot Description" 
                id="botDescription" 
                value={newBot.description}
                // event sets the new bot description to the value of the input field
                // ...newBot is used to keep the other properties of the new bot object intact
                // e.target.value is the value of the input field
                onChange={(e) => setNewBot({...newBot, description: e.target.value})} 
                />
                <select 
                className="border-2 p-2 rounded-md mx-4" 
                name="botStatus" 
                id="botstatus" 
                placeholder="Bot Status" 
                value={newBot.status} 
                onChange={(e) => setNewBot({ ...newBot, status: e.target.value })}>
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                </select>
                <button className="border-2 p-2" type="submit" onClick={(e) => addBotToList(e)}>Add</button>
            </form>
            <button className="border-2 p-2 rounded-md" onClick={() => setShow(!show)}>
                Click to show/hide
            </button>
            {show && (
                <JobList
                    jobs={bots}
                    onTriggerJob={handleTriggerJob}
                    onDeleteJob={handleDeleteJob}
                />
            )}
        </div>
    );
}