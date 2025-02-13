// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    jokes: {
      id: string;
      text: string;
      created_at: Date;
      updated_at: Date;
    };
  }
}
