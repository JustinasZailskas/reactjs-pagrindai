export default function AboutMe({name, hobby, description}) {
    return (
        <article>
            <h1>Vardas {name}</h1>
            <h2>Hobis {hobby}</h2>
            <p>Aprasymas {description}</p>
        </article>
    )
}