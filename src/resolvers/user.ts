import { Resolver, Query } from 'type-graphql'

@Resolver()
export default class UserResolver {

    @Query()
    status(): string {
        return 'Está rodando'
    }

}