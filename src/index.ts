import 'reflect-metadata'

import { createConnection, useContainer } from 'typeorm'
import { Container } from 'typeorm-typedi-extensions'
import Server from './server'

useContainer(Container)
createConnection().then(() => {
    const server = Container.get(Server)
    return server.start()
})
