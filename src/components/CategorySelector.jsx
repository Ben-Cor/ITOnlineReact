export default function CategorySelector({handleCategoryChange, selectedCategories}) {

    const categoryStyles = {
        "Read Mails": "bg-green-500",
        "Send Mail": "bg-yellow-500",
        "Web Parsing": "bg-red-500",
    }

    return (
        <div className="flex gap-4 justify-center items-center">
            <p>Categories: </p>
            {Object.keys(categoryStyles).map((category) => (
                <button
                    key={category}
                    className={`p-2 border-2 rounded-md ${
                        selectedCategories.includes(category) ? categoryStyles[category] : "bg-gray-200"
                    }`}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}