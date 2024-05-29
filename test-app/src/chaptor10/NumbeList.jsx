export default function NumberList(props) {
//    const { numbers } = props
const numbers = [1,2,3,4,5]

    const listItems = numbers.map((number , i) =>
        <li key={number.toString()}>{number}</li>
    )

    return (
        <ul>{listItems}</ul>
    )
    
}