import {
    getJSON
} from "./json.js"

const itens = [],
    founder = {
        office: document.getElementById('office'),
        name: document.getElementById('name'),
        text: document.getElementById('text'),
        image: document.getElementById('image')
    }

const getFounder = async (index) => {
    const json = await getJSON('../../json/founders.json'),
        {
            name,
            age,
            office,
            text,
            image
        } = json.default[index]

    founder.office.innerHTML = office
    founder.name.innerHTML = `${name}, ${age} anos`
    founder.text.innerHTML = text
    founder.image.setAttribute('src', image)

    itens.forEach((item, i) => {
        i === index ? item.classList.add('selected') : item.classList.remove('selected')
    })
}

const createFounders = async () => {
    const slide = document.querySelector('.slide')

    const json = await getJSON('../../json/founders.json')

    json.default.forEach((element, index) => {
        const item = document.createElement('li')
        itens.push(item)
        item.addEventListener('click', () => getFounder(index))
        slide.appendChild(item)
    })

    getFounder(0)
}

export {
    createFounders
}