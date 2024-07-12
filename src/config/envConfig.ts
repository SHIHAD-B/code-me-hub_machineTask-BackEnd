

const MONGODB_USERNAME: string = String(process.env.MONGODB_USERNAME)
const MONGODB_PASSWORD: string = String(process.env.MONGODB_PASSWORD)
console.log(MONGODB_PASSWORD,MONGODB_USERNAME)
export const DB_URL = `mongodb+srv://shihadsafe:N6k6uDsmNuh5IHbJ@cluster0.rps7pnn.mongodb.net/codemehub?retryWrites=true&w=majority&appName=Cluster0`
export const PORT: number = Number(process.env.PORT)