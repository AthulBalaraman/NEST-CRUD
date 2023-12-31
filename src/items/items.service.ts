import { Injectable } from '@nestjs/common';
import { ItemSchema } from './schemas/item.schema';
// import { Item } from './interfaces/item.interface';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private  itemModel: Model< Item >) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }


  async create(item:Item): Promise<Item> {
    const newItem =  new this.itemModel(item)
    return await newItem.save()
  }

  async deleteItem(id:string): Promise<Item>{
    return await this.itemModel.findByIdAndRemove(id)
  }

  async updateItem(id:string, item:Item):Promise<Item>{
    return await this.itemModel.findByIdAndUpdate(id,item)
  }
}
