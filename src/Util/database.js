class Database {
    constructor({ connetionString }){
        this.connetionString = connetionString
    }

    async sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    async connect() {
        await this.sleep(100)
        return this
    }

    async find(query) {
        await this.sleep(100)
        return [{name: "Josefina"}]
    }
}

module.exports = Database