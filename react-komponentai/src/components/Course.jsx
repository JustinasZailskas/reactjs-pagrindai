export default function Course({course}) {
    return (
        <li>
            <h2>{course.title}</h2>
            <p>Destytojas: {course.teacher}</p>
            <p>Trukme: {course.hours}</p>
        </li>
    )
}