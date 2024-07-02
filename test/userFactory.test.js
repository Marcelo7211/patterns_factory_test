const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert')


//<Poderia estar em outro arquivo>

const dbData = [{name: "Joaozinho"}, {name: "Mariazinha"}]

class MockDatabase {
    connect = () => this
    find = async (query) => dbData 
}
//</Poderia estar em outro arquivo>

rewiremock(()=> require('./../src/Util/database')).with(MockDatabase)

;(async ()=> {
    {

        //Usando rewiremock para mockar o banco de dados

        const expected = [{name: "JOAOZINHO"}, {name: "MARIAZINHA"}]
        rewiremock.enable()
        const UserFactory = require('../src/factory/userFactory')

        const userFactory = UserFactory.createInstance()
        const result = await (await userFactory).find()

        deepStrictEqual(result, expected)

        rewiremock.disable()

    }

    {
        //Testando e fazendo a coneccao no banco

        const expected = [{name: "JOSEFINA"}]
        
        const UserFactory = require('../src/factory/userFactory')

        const userFactory = UserFactory.createInstance()
        const result = await (await userFactory).find()

        deepStrictEqual(result, expected)

    }

})()
