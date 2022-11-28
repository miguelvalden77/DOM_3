const SECTION = document.querySelector(".container")

const TEXT = document.createElement("p")
TEXT.textContent = "Hola mundo"

const TEXT_2 = document.createElement("p")
TEXT_2.textContent = "Hola mundo 2"

const TEXT_3 = "Titulo de prueba"

SECTION.appendChild(TEXT)
SECTION.insertAdjacentElement("afterbegin", TEXT_2)
SECTION.insertAdjacentHTML("beforebegin", `<h3>${TEXT_3}</h3>`)

const apiCaller = async (id)=>{

    // Llamada a la api
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    console.log(data)

    // Creación del elemento
    const ELEMENT = document.createElement("p")
    ELEMENT.textContent = data.name
    console.log(ELEMENT.textContent)

    // Introducción del elemento
    SECTION.insertAdjacentElement("beforeend", ELEMENT)

}
apiCaller(68)

const BUTTON = document.getElementById("button")
const INPUT = document.getElementById("input")

const apiCaller2 = async (id)=>{

    // Llamada a la api
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    console.log(data)

    // Creación del elemento
    SECTION.insertAdjacentHTML("beforeend", 
    `<article id=${data.id}> 
        <img src=${data.image} alt="foto"/>
        <h3>${data.name}</h3>
        <p>${data.species}</p>
        <button id="eliminar-${data.id}">Eliminar</button>
     </article>`)

}

const apiCaller3 = async ()=>{

    // Llamada a la api
    const response = await fetch(`https://rickandmortyapi.com/api/character/`)
    const data = await response.json()
    console.log(data.results)

    const ELEMENT = document.createElement("div")

    data.results.forEach(obj => {
        ELEMENT.insertAdjacentHTML("afterbegin", 
        `<article id=${obj.id}> 
        <img src=${obj.image} alt="foto"/>
        <h3>${obj.name}</h3>
        <p>${obj.species}</p>
     </article>`)
    });

    SECTION.appendChild(ELEMENT)
    

}

apiCaller3()

BUTTON.addEventListener("click", ()=>{

    const VALUE = INPUT.value
    
    apiCaller2(VALUE)

    const ELIMINAR = document.getElementById(`eliminar-${VALUE}`)
    ELIMINAR.addEventListener("click",()=>{
    console.log("hoal")
    })
})

