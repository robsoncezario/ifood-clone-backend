import { 
  Model, 
  Table, 
  Column, 
  Index,
  PrimaryKey,
  Unique,
  CreatedAt,
  AllowNull,
  DataType,
  UpdatedAt,
  AutoIncrement,
  DeletedAt,
  Scopes,
  ForeignKey
} from 'sequelize-typescript';

import { 
  Int,
  ObjectType, 
  Field 
} from 'type-graphql';

import Customer from '../Customer/model';
import Restaurant from '../Restaurant/model';

@ObjectType()
@Table({tableName: 'rating',
        timestamps: true,
        paranoid: true})
@Scopes(() => ({
  full: {
    include: [
      Customer,
      Restaurant
    ]
  }
}))
export default class Rating extends Model<Rating> {
  @Field(type => Int)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Index
  @Column(DataType.INTEGER) 
  public id!: number; 

  @ForeignKey(() => Customer)
  @Index
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public customerId!: number;

  @ForeignKey(() => Restaurant)
  @Index
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public restaurantId!: number;

  @Field({nullable: false})
  @AllowNull(false)
  @Column(DataType.DOUBLE) 
  public value!: number;

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