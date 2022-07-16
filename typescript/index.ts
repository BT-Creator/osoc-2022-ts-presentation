interface IDCard {
    name: string,
    age: number
}

interface Occupation {
    job: string,
    company: string
}

class User {
    name: string;
    age: number;
    occupation: Occupation;
    languages: Array<string>;

    constructor(name: string, age: number, occupation: Occupation, languages: Array<string>) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.languages = languages;
    }

    toTable(): object {
        const date: Date = new Date()
        return {
            "User": this.name,
            "Born on": date.getFullYear() - this.age,
            "Current Job": `${this.occupation.job} at ${this.occupation.company}`,
            "Amount of script languages": this.languages.filter(lang => lang.includes("Script")).join(", "),
            "Amount of Java References": this.languages.filter(lang => lang.includes("Java")).length
        }
    }
}

function createUser(idCard: IDCard, occupation: Occupation, languages: Array<string>) {
    return new User(idCard.name, idCard.age, occupation, languages);
}

function printUser(content: object) {
    console.table(content)
}

const insertedCard: IDCard = {
    name: "Bo",
    age: 21
}

const occupation: Occupation = {
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

const newUser = new User(insertedCard.name, insertedCard.age, occupation, languages)
printUser(newUser.toTable())
