import { ObjectType, Field, Resolver, Arg, Mutation } from "type-graphql";

@ObjectType()
class Classes {
    @Field() id: string
    @Field() name: string
}

class createClass {
    @Field() name: string
}

@Resolver()
export default class ClassesResolver{
    // Criação das mutations e querys dentro da 'classe'
    @Mutation(_ => createClass)
    async createClass(
        @Arg('name') name: string
    ) {
        return // É o retorno da função do service
    }
}