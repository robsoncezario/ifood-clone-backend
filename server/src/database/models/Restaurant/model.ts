import { 
  Model, 
  Table, 
  Column, 
  HasMany, 
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
  DefaultScope,
  Scopes,
  ForeignKey,
  Default
} from 'sequelize-typescript';

import { 
  Int,
  ObjectType, 
  Field
} from 'type-graphql';

import Address from '../Address/model';
import Rating from '../Rating/model';
import Category from '../Category/model';
import Order from '../Order/model';

@ObjectType()
@Table({tableName: 'restaurants',
        initialAutoIncrement: '1',
        timestamps: true,
        paranoid: true})
@DefaultScope(() => ({
  include: [
    Category,
    Address,
    Rating
  ]
}))
@Scopes(() => ({
  withDetails: {
    include: [
      Category,
      Address,
      Rating,
      Order
    ]
  }
}))
export default class Restaurant extends Model<Restaurant> {
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
  @AllowNull(true)
  @Column(DataType.STRING({length: 256}))
  public imageSrc!: string;

  @ForeignKey(() => Address)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public addressId!: number;

  @Field(type => Address)
  @HasOne(() => Address, {
    sourceKey: 'addressId',
    foreignKey: 'id'
  })
  public address?: Address;

  @ForeignKey(() => Category)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public categoryId!: number;

  @Field(type => Category)
  @HasOne(() => Category, {
    sourceKey: 'categoryId',
    foreignKey: 'id'
  })
  public category?: Category;

  @Field(type => [Rating], {defaultValue: []})
  @HasMany(() => Rating)
  public rating?: Rating[];

  @Field(type => [Order], {defaultValue: []})
  @HasMany(() => Order)
  public orders?: Order[];
  
  @Field(type => Boolean)
  @Default(false)
  @Column 
  public exclusive?: boolean;

  @Field(type => Int)
  @Default(30)
  @Column(DataType.INTEGER) 
  public minDeliveryInterval?: number;


  @Field(type => Int)
  @Default(40)
  @Column(DataType.INTEGER) 
  public maxDeliveryInterval?: number;

  @Field(type => Int)
  @Default(0)
  @Column(DataType.INTEGER) 
  public minDeliveryPrice?: number;

  @Field(type => Int)
  @Default(0)
  @Column(DataType.INTEGER) 
  public deliveryCost?: number;

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