import TicketInfo from "./TicketInfo";
import completedImage from '../assets/completed.png';
import inProgressImage from '../assets/in-progress.svg';
import failedImage from '../assets/failed.png';


export default function StatusBoard({completed, inProgress, failed}) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 mb-20">
            <TicketInfo result={'Completed'} image={completedImage} imageAlt={'Completed'} completed={completed} inProgress={inProgress} failed={failed} />

            <TicketInfo result={'In Progress'} image={inProgressImage} imageAlt={'In Progress'} completed={completed} inProgress={inProgress} failed={failed} />

            <TicketInfo result={'Failed'} image={failedImage} imageAlt={'Failed'} completed={completed} inProgress={inProgress} failed={failed} />
        </div>
    )
}