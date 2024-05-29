export default function AttendanceBook(props) {
    reutrn(
        <ul>
            {students.map((strunct) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}

const students = [
    {
        name: "홍길동"
    },
    {
        name: "홍길동1"
    },
    {
        name: "홍길동2"
    },
    {
        name: "홍길동3"
    },
    {
        name: "홍길동4"
    },
]