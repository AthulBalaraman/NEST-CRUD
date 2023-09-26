import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService : ItemsService){

  }


  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item : ${param.id}`;
  }

  // Another way of writing the code above findOne and findOneNew are same
  @Get('findOne/:id')
  async findOneNew(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id)
  }

  @Post()
  create(@Body() createItemDtoBody: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDtoBody)
  }

  @Delete(':id')
  deleteItem(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteItem(id);
  }

  @Put(':id')
  update(@Body() updateItemDtoBody: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.updateItem(id,updateItemDtoBody)
  }
}
 