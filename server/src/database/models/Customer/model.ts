import { 
  Model, 
  Table, 
  Column, 
  Index,
  PrimaryKey,
  Unique,
  IsEmail,
  CreatedAt,
  AllowNull,
  DataType,
  UpdatedAt,
  AutoIncrement,
  DeletedAt,
  DefaultScope,
  Scopes,
  HasMany
} from 'sequelize-typescript';
import { 
  Field, 
  ObjectType, 
  Int
} from 'type-graphql';

import Address from '../Address/model';
import Rating from '../Rating/model';

@ObjectType()
@Table({tableName: 'customers',
        initialAutoIncrement: '1',
        timestamps: true,
        paranoid: true})
@DefaultScope(() => ({
  include: [Address]
}))
@Scopes(() => ({
  full: {
    include: [Address]
  }
}))
export default class Customer extends Model<Customer> {
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
  @Unique
  @Index
  @IsEmail
  @Column(DataType.STRING({length: 256}))
  public email!: string;

  @Field()
  @AllowNull(false)
  @Column(DataType.STRING({length: 11}))
  public cpf!: string;

  @Field()
  @AllowNull(true)
  @Column(DataType.STRING({length: 256}))
  public imageSrc!: string;

  @Field()
  @AllowNull(true)
  @Column(DataType.STRING({length: 16}))
  public phoneNumber!: string;

  @Field(type => [Rating], {defaultValue: []})
  @HasMany(() => Rating)
  public rating?: Rating[]; 

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