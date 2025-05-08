import { useState } from "react";

function BotListManager() {

    const [bots, setBots] = useState([
        { id:1, name: "Email Extractor", description: "Extracts emails from text", status: "active" },
        { id:2, name: "Data Scraper", description: "Scrapes data from websites", status: "inactive" },
        { id:3, name: "Sentiment Analyzer", description: "Analyzes sentiment of text", status: "active" },
        { id:4, name: "Keyword Extractor", description: "Extracts keywords from text", status: "inactive" },
        { id:5, name: "Text Summarizer", description: "Summarizes text", status: "active" },
    ]);

    function handleTriggerJob(id) {
        setBots((prevBots) =>
            //map through the previous bots
            prevBots.map((bot) =>
                // ternery stratement to check if the bot id is equal to the id passed in the function
                // if it is, then we change the status of the bot to inactive or active
                // if it is not, then we return the bot as it is
                bot.id === id
                    ? { ...bot, status: bot.status === "active" ? "inactive" : "active" }
                    : bot
            )
        );
    }


    // bots is an array of objects
    // .filter(bot => bot.id !== id) creates a new array that excludes the bot whose id matches the id passed to the function.
    //setBotsValue is a state-updating function (like useState's setter) that replaces the old bots array with the newly filtered array.
    function handleDeleteJob(id) {
        console.log(`${id} -  deleted`);
        setBots(bots.filter(bot => bot.id !== id));
    }

    const textColour = (status) => { 
        return status === "active" ? "text-green-700" : "text-red-500";
    }

    return (
        <div >
            <ul className="flex flex-wrap items-center justify-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4">
                {bots.map((bot) => {
                    return (
                        <li key={bot.id} className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px] border-2">
                            <h2 className="text-2xl">{bot.name}</h2>
                            <p>{bot.description}</p>
                            <p className={textColour(bot.status)}>Status: {bot.status}</p>
                            <button className="p-2 border-2 rounded-md" onClick={() => handleTriggerJob(bot.id)}>Trigger Job</button>
                            <button className="p-2 border-2 rounded-md" onClick={() => handleDeleteJob(bot.id)}>Delete Job</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BotListManager;