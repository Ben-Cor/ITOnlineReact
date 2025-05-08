export default function TicketInfo({ result, image, imageAlt }) {
    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px] border-2">
            <h2>{result}</h2>
            <img src={image} alt={imageAlt} />
        </div>
    );
}