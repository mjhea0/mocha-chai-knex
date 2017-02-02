# Token-Based Authentication with Node

## Want to learn how to build this project?

Check out the [blog post](http://mherman.org/blog/2016/10/28/token-based-authentication-with-node/#.WBNVr5MrJE4).

## Want to use this project?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Create two local Postgres databases - `node_token_auth` and `node_token_auth_test`
1. Migrate - `knex migrate:latest --env development`
1. Seed - `knex seed:run --env development`
1. Run the development server - `gulp`
1. Test - `npm test`
