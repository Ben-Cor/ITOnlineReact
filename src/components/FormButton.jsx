export default function FormButton({ value, onClick }) {
    return (
        <button onClick={onClick} className="p-2 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
            {value}
        </button>
    );
}