function VariableDisplay () {

    let string = "Hello World"
    let number = 42
    let boolean = true
    let array = ["apple", "banana", "cherry"]
    let object = { name: "John", age: 30, city: "New York" }

    if (Math.random() > 0.5) {
        string = "Goodbye World"
        number = 100
        boolean = false
        array = ["orange", "grape", "kiwi"]
        object = { name: "Jane", age: 25, city: "Los Angeles" }
    }

    return (
        <div>
            <p>{string}</p>
            <p>{number}</p>
            <p>{boolean}</p>
            <p>{array}</p>
            <p>{object.name}</p>
        </div>
    )
}

export default VariableDisplay;