import { appSchema } from '@nozbe/watermelondb';
import { UserSchema } from './UserSchema';


const schemas = appSchema({
  version: 1,
  tables: [
    UserSchema
  ]
})

export { schemas };
