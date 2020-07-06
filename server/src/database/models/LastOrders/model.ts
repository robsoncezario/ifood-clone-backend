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
  ForeignKey,
  HasOne,
  DefaultScope
} from 'sequelize-typescript';

import { 
  Int,
  ObjectType, 
  Field 
} from 'type-graphql';

import Customer from '../Customer/model';
import Order from '../Order/model';
import Address from '../Address/model';

@ObjectType()
@Table({tableName: 'customer_order_history',
        timestamps: true,
        paranoid: true})
@DefaultScope(() => ({
  include: [
    Customer,
    Order,
    Address
  ]
}))
export default class OrderHistory extends Model<OrderHistory> {
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

  @Field(type => Customer)
  @HasOne(() => Customer, {
    sourceKey: 'customerId',
    foreignKey: 'id'
  })
  public customer?: Customer;

  @ForeignKey(() => Order)
  @Index
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public orderId!: number;

  @Field(type => Order)
  @HasOne(() => Order, {
    sourceKey: 'orderId',
    foreignKey: 'id'
  })
  public order?: Order;

  @ForeignKey(() => Address)
  @Index
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public addressId!: number;

  @Field(type => Address)
  @HasOne(() => Address, {
    sourceKey: 'addressId',
    foreignKey: 'id'
  })
  public address?: Address;

  @Field(type => Date)
  @Column 
  public deliveryDate?: Date;

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