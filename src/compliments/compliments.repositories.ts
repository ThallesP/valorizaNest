import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from './entities/compliment.entity';

@EntityRepository(Compliment)
export class ComplimentsRepositories extends Repository<Compliment> {}
