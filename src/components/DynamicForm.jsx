import { useState } from "react";

function DymanicForm () {

    const [formData, setFormData] = useState("");
    
    function handleChangeInput (e) {
        setFormData(e.target.value);
        };

    function handleDataReset (e) {
        e.preventDefault();
        setFormData("");
        document.getElementById("text").value = "";
    }

    return (
        <div>
            <form action="" className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[500px]">
                <div>
                    <label className="pr-2" htmlFor="text">Text input:</label>
                    <input className="border-2 p-2" type="text" id="text" name="text" onChange={handleChangeInput} />
                </div>
                <p>{formData}</p>
                <button className="border-2 p-2" onClick={handleDataReset}>Reset Text</button>
            </form>
        </div>
    )
}

export default DymanicForm;