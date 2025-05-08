import TicketInfo from "./TicketInfo";
import completedImage from '../assets/completed.png';
import inProgressImage from '../assets/in-progress.svg';
import failedImage from '../assets/failed.png';


export default function StatusBoard() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 mb-20">
            <TicketInfo result={'Completed'} image={completedImage} imageAlt={'Completed'} />

            <TicketInfo result={'In Progress'} image={inProgressImage} imageAlt={'In Progress'}/>

            <TicketInfo result={'Failed'} image={failedImage} imageAlt={'Failed'}/>
        </div>
    )
}