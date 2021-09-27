import { Connection } from 'typeorm';
import { Rating } from '../entities/reaction.entity';
import { Exercice } from '../entities/singleworkout.entity';
import { Workout } from '../entities/workout.entity';
import { Comment } from '../entities/comments.entity';
import { User } from '../entities/User.entity';
export const RepoProviders = [
  {
    provide: 'WORKOUT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Workout),
    inject: ['DATABASE_CONNECTION'],
  },

  {
    provide: 'EXERCICE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Exercice),
    inject: ['DATABASE_CONNECTION'],
  },

  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ['DATABASE_CONNECTION'],
  },

  {
    provide: 'REACTION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Rating),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
