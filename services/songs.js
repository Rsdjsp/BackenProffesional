const { PrismaClient } = require("@prisma/client")


const client = new PrismaClient() 

class Songs{
    async getAll() {
        const songs = await client.song.findMany()
        return res.json(songs)
    }
}


module.exports = Songs