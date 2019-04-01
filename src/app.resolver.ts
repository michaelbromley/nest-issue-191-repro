import { Response } from 'express';
import { Query, Context, Resolver, ResolveProperty } from '@nestjs/graphql';

@Resolver('Person')
export class AppResolver {

  @Query('person')
  async person(@Context() context) {
    console.log('context in person', context);
    return {
      name: 'alice',
    };
  }

  @ResolveProperty('age')
  age(@Context() context) {
    console.log('context in age', context);
    return 42;
  }
}
