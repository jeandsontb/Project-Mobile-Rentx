import { tableSchema } from '@nozbe/watermelondb';

const UserSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'users_id',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'driver_license',
      type: 'string',
    },
    {
      name: 'avatar',
      type: 'string',
    },
    {
      name: 'token',
      type: 'string',
    },
  ]
})

export {UserSchema};
