import { 
  Model, 
  Table, 
  Column, 
  HasOne,
  Index,
  PrimaryKey,
  Unique,
  CreatedAt,
  AllowNull,
  DataType,
  UpdatedAt,
  AutoIncrement,
  DeletedAt,
  ForeignKey,
  Default
} from 'sequelize-typescript';

import { 
  Int,
  ObjectType, 
  Field 
} from 'type-graphql';

import Restaurant from '../Restaurant/model';

@ObjectType()
@Table({tableName: 'restaurant_orders',
        initialAutoIncrement: '1',
        timestamps: true,
        paranoid: true})
export default class Order extends Model<Order> {
  @Field(type => Int)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Index
  @Column(DataType.INTEGER) 
  public id!: number; 

  @Field()
  @AllowNull(false)
  @Column(DataType.STRING({length: 64}))
  public name!: string;

  @Field()
  @AllowNull(false)
  @Column(DataType.STRING({length: 256}))
  public description!: string;

  @Field(type => Int)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public price!: number;

  @Field()
  @AllowNull(true)
  @Column(DataType.STRING({length: 256}))
  public imageSrc!: string;

  @ForeignKey(() => Restaurant)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public restaurantId!: number;

  @Field(type => Restaurant)
  @HasOne(() => Restaurant, {
    sourceKey: 'restaurantId',
    foreignKey: 'id'
  })
  public restaurant?: Restaurant;

  @Field(type => Int)
  @Default(0)
  @Column(DataType.INTEGER) 
  public discount?: number;

  @Field(type => Date)
  @UpdatedAt
  @Column 
  public updatedAt?: Date;

  @Field(type => Date)
  @CreatedAt
  @Column 
  public createdAt?: Date;

  @Field(type => Date)
  @DeletedAt
  @Column 
  public deletedAt?: Date;
}