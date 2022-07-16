const user = {
    name: "Bo Robbrecht",
    age: 21,
    occupation: {
        job: "Student Coach",
        company: "Open Summer Of Code"
    },
    languages: [
        "JavaScript",
        "TypeScript",
        "CSS",
        "Java",
        "Python"
    ]
}


function createUser(idCard, occupation, languages) { 
    return {
        name: idCard.name,
        age: idCard.age,
        occupation: occupation,
        languages: languages
    }
}

function printUser(user) { 
    const date = new Date()
    console.table({
        "User": user.name,
        "Born on": date.getFullYear() - user.age,
        "Current job": `${user.occupation.job} at ${user.occupation.company}`,
        "Amount of script languages": user.languages.filter(lang => lang.includes("Script")).join(", "),
        "Amount of Java references": user.languages.filter(lang => lang.includes("Java")).length
    })
}

const insertedCard = {
    name: "Bo",
    age: 21
}

const occupation = {
    job: "Student Coach",
    company: "Open Summer Of Code"
}

const languages = [
    "JavaScript",
    "TypeScript",
    "CSS",
    "Java",
    "Python"
]

const newUser = createUser(insertedCard, occupation, languages)
printUser(newUser)
