import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllArtefactsPaginationDto } from './dtos/get-all-artefacts-pagination.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('namaste_duniya')
  namasteAnalytics() {
    return this.appService.namasteDuniya();
  }

  @Get('artefacts')
  async getAllArtifactsPagination(
    @Query() getAllArtifactsPaginationDto: GetAllArtefactsPaginationDto
  ) {
    return this.appService.getAllArtefactsPagination(
      getAllArtifactsPaginationDto
    );
  }
}
