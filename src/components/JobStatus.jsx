import FormButton from "./FormButton";
import deleteIcon from "../assets/delete.svg";

export default function JobStatus({task, deleteJob, job, changeStatus}) {



    return (
        <article className="border-2 border-neutral-300 rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="text-center text-lg mt-4">{task}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
                <div className="flex flex-col items-center gap-2">
                    <FormButton value={"Parse Email"} />
                    <FormButton value={"SAP Extraction"} />
                </div>
                <FormButton onClick={() => deleteJob(job.id)} value={<img className="w-[50px] h-[75px]" src={deleteIcon} alt="delete" />} />
                <select defaultValue={job.status} onChange={(e) => changeStatus(job.id, e)} className="border-2 border-blue-500 p-2" name="status" id="status">
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Important">Important</option>
                </select>
            </div>
        </article>
    );
}