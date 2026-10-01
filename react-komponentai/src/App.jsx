import AboutMe from './components/AboutMe';
import CourseList from './components/CourseList';
import './App.css'

function App() {
  const courses = [
    {
      id: 1,
      title: "React JS pagrindai",
      teacher: "Justinas Zailskas",
      hours: 40
    }, 
    {
      id: 2,
      title: "Programu sistemu inzinerija",
      teacher: "Joana Katina",
      hours: 36
    }, 
    {
      id: 3,
      title: "Programu testavimas",
      teacher: "Akvile",
      hours: 24
    }
  ]

  return (
    <main>
      <h1>Kursu sarasas</h1>
      <CourseList courses={courses}/>
    </main>
  )
}

export default App
