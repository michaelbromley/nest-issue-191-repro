# Repro of Nest issue [#191](https://github.com/nestjs/graphql/issues/191)

1. `yarn / npm install`
2. run `start:dev`
3. make a graphql request to localhost:3000/graphql:
    ```sdl
    {
       person {
         name
         age
       } 
     }
    ```
4. look at the server console for the logged values of `context` 



