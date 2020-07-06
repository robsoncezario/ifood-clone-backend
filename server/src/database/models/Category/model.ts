import { 
  Model, 
  Table, 
  Column, 
  HasMany, 
  PrimaryKey,
  AllowNull,
  DataType,
  AutoIncrement,
  Unique,
  Index,
  Scopes
} from 'sequelize-typescript';

import { 
  Field, 
  ObjectType, 
  Int
} from 'type-graphql';

import Restaurant from '../Restaurant/model';

@ObjectType()
@Table({tableName: 'categories',
        initialAutoIncrement: '1',
        timestamps: false})
@Scopes(() => ({
  list: {
    include: [Restaurant]
  }
}))
export default class Category extends Model<Category> {
  @Field(type => Int)
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Index
  @Column(DataType.INTEGER) 
  public id!: number;

  @Field({nullable: false})
  @AllowNull(false)
  @Column(DataType.STRING({length: 64}))
  public name!: string;

  @Field({nullable: false})
  @AllowNull(false)
  @Column(DataType.STRING({length: 256}))
  public imageSrc!: string;

  @Field(type => [Restaurant], { 
    defaultValue: []})
  @HasMany(() => Restaurant)
  public restaurants?: Restaurant[]; 
}