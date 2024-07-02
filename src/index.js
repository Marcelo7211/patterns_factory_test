const UserFactory = require('../src/factory/userFactory')


;(async () => {
    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find({name:'marcelo*'})

    console.log({ result })
})()