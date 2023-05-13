import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { Container, Service } from 'typedi'
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'

@Service()
export default class Server {
    async start() {
        const schema = await buildSchema({
            container: Container,
            resolvers: [`${__dirname}/resolvers/*`],
            validate: false,
            
        })
        const server = new ApolloServer({
            plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
            schema
        })

        await server.listen(3000, () => {
            console.log('🚀 Server running on port 3000')
        })
    }
}
