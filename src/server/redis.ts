import {createClient} from 'redis'
const client = createClient({
    socket: {
        host: "localhost",
        port: 6379
    }
})

client.on("connect", () => {
    console.log("Connected redis")
})
export default client