import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepositores } from 'src/users/users.repositories';
import { ComplimentsRepositories } from './compliments.repositories';
import { CreateComplimentDto } from './dto/create-compliment.dto';
import { UpdateComplimentDto } from './dto/update-compliment.dto';

@Injectable()
export class ComplimentsService {
  constructor(
    private complimentsRepositories: ComplimentsRepositories,
    private usersRepositories: UsersRepositores,
  ) {}

  async create(createComplimentDto: CreateComplimentDto) {
    if (createComplimentDto.user_receiver == createComplimentDto.user_sender) {
      throw new BadRequestException(
        'You cannot send a compliment to yourself!',
      );
    }

    const userReceiverExists = await this.usersRepositories.findOne(
      createComplimentDto.user_receiver,
    );

    if (!userReceiverExists) {
      throw new BadRequestException(
        'The receiver of the compliment does not exist!',
      );
    }

    const compliment = this.complimentsRepositories.create(createComplimentDto);

    await this.complimentsRepositories.save(compliment);

    return compliment;
  }

  async findAll() {
    const compliments = await this.complimentsRepositories.find();

    return compliments;
  }

  async findOne(id: string) {
    const compliment = await this.complimentsRepositories.findOne(id);

    if (!compliment) throw new BadRequestException('Compliment not found!');

    return compliment;
  }

  async update(id: string, updateComplimentDto: UpdateComplimentDto) {
    const compliment = await this.complimentsRepositories.findOne(id);

    if (!compliment) throw new BadRequestException('Compliment not found!');

    const complimentUpdated = await this.complimentsRepositories.save({
      ...compliment,
      ...updateComplimentDto,
    });

    return complimentUpdated;
  }

  async remove(id: string) {
    const compliment = await this.complimentsRepositories.findOne(id);

    if (!compliment) throw new BadRequestException('Compliment not found!');

    await this.complimentsRepositories.delete(id);

    return;
  }
}
