import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Artefact } from './schemas/artifact.schema';
import { Model, Types } from 'mongoose';
import { GetAllArtefactsPaginationDto } from './dtos/get-all-artefacts-pagination.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { CustomLogger } from '@app/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    @InjectModel(Artefact.name) private readonly artefactModel: Model<Artefact>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: CustomLogger
  ) {}
  getHello(): string {
    this.authClient.emit('hello_world', 'Hello from microservice!');
    return 'Hello World!';
  }

  namasteDuniya() {
    return this.authClient.send({ cmd: 'namaste_duniya' }, {});
  }

  async getAllArtefactsPagination(query: GetAllArtefactsPaginationDto) {
    this.logger.debug('getAllArtefactsPagination called', {
      objectData: query,
    });
    const pipeline = [
      {
        $facet: {
          total: [
            {
              $count: 'total',
            },
          ],
          list: [
            {
              $match: {
                isDeleted: false,
                _id: {
                  $gt: new Types.ObjectId('661a2fc5a333860d4f414155'),
                },
              },
            },
          ],
        },
      },
    ];

    const data = await this.artefactModel.aggregate(pipeline);

    return data;
  }
}
