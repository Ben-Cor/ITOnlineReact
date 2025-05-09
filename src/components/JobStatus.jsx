import FormButton from "./FormButton";
import deleteIcon from "../assets/delete.svg";

export default function JobStatus({task, deleteJob}) {
    return (
        <article className="border-2 border-neutral-300 rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="text-center text-lg mt-4">{task}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
                <div className="flex flex-col items-center gap-2">
                    <FormButton value={"Parse Email"} />
                    <FormButton value={"SAP Extraction"} />
                </div>
                <FormButton onClick={deleteJob} value={<img className="w-[50px] h-[75px]" src={deleteIcon} alt="delete" />} />
            </div>
        </article>
    );
}