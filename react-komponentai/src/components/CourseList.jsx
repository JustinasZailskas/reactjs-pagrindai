import Course from "./Course"
export default function CourseList({courses}) {
    return (
        <ul>
            {courses.map((course) => (
                <Course key={course.id} course={course}/>
            ))}
        </ul>
    )
}
