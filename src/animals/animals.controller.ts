import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Animals } from 'src/interfacez/animals.interface';
import { AnimalsService } from 'src/services/animals.service';

@Controller('animals')
export class AnimalsController {
    constructor(
        private animalsService: AnimalsService
    ) { }

    @Get()
    findAll(): Animals[] {
        return this.animalsService.get();
    }

    @Post()
    create(@Body() createAnimals: Animals) {
        this.animalsService.post(createAnimals);
    }

    @Put()
    update(@Body() updateAnimals: Animals) {
        return this.animalsService.update(updateAnimals);
    }

    @Delete()
    delete(@Query('id') id: number) {
        return this.animalsService.delete(id);
    }
}
