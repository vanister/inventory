# Models

## Important! 

If you want the initialized model, import that from the `index.ts` file.
- I.E. `import { LocationType } from './models'`
- Use this imported type if you want to interact with the db through `sequelize`.

If you want the model type only, import that from the model file.
- I.E. `import { LocationType } from './models/LocationType'`
- NOTE: Calling `sequelize` model functions on this import will fail!

