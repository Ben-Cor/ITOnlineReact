import { useState } from "react";

function DymanicForm () {

    const [formData, setFormData] = useState("");
    const [formMessages, setFormMessages] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    
    function handleChangeInput (e) {
        setFormData(e.target.value);
        setCharacterCount(e.target.value.length);
        };

    function handleDataReset (e) {
        e.preventDefault();
        setFormData("");
        setCharacterCount(0);
        setFormMessages([]);
        document.getElementById("text").value = "";
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (formData) {
            setFormMessages([...formMessages, formData]);
            setFormData("");
            setCharacterCount(0);
            document.getElementById("text").value = "";
        } else {
            alert("Please enter some text before submitting.");
        }
    }

    return (
        <div>
            <form action="" className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[500px]">
                <div>
                    <label className="pr-2" htmlFor="text">Text input:</label>
                    <input className="border-2 p-2" type="text" id="text" name="text" onChange={handleChangeInput} />
                </div>
                <p>{formData}</p>
                <p>Characters = {characterCount}</p>
                <p className="overflow-auto">Saved messages : {formMessages.join(', ')}</p>
                <button className="border-2 p-2" onClick={handleSubmit}>Submit</button>
                <button className="border-2 p-2" onClick={handleDataReset}>Reset Text</button>
            </form>
        </div>
    )
}

export default DymanicForm;