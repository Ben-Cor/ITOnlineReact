export default function JobForm({ addBotToList, newBot, setNewBot }) {
    return (
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
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progess</option>
                    <option value="Failed">Failed</option>
                </select>
                <button className="border-2 p-2" type="submit" onClick={(e) => {addBotToList(e)}}>Add</button>
            </form>
    );
}