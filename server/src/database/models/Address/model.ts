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
  DeletedAt
} from 'sequelize-typescript';

import { 
  Int,
  ObjectType, 
  Field 
} from 'type-graphql';

@ObjectType()
@Table({tableName: 'addresses',
        initialAutoIncrement: '1',
        timestamps: true,
        paranoid: false})
export default class Address extends Model<Address> {
  @Field(type => Int)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Index
  @Column(DataType.INTEGER) 
  public id!: number; 

  @Field({nullable: false})
  @AllowNull(false)
  @Column(DataType.DECIMAL(11, 2)) 
  public latitude!: number;

  @Field({nullable: false})
  @AllowNull(false)
  @Column(DataType.DECIMAL(11, 2)) 
  public longitude!: number;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public number?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public street?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public neighborhood?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public city?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public state?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public country?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public countryCode?: string;

  @Field({nullable: true})
  @AllowNull(true)
  @Column
  public postalCode?: string;

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

  // A fórmula de Haversine me retorna me retorna a distância entre dois pontos.
  // https://en.wikipedia.org/wiki/Haversine_formula
  public getDistanceBetween = (address: Address): number => {
    const toRadians = (deg : number) => deg * Math.PI / 180;

    const lat: number = toRadians(address.latitude - this.latitude),
          lng: number = toRadians(address.longitude - this.latitude);

    const a: number = Math.sin(lat / 2) * Math.sin(lat / 2) +
                       Math.cos(toRadians(this.latitude)) * Math.cos(toRadians(address.latitude)) *
                       Math.sin(lng / 2) * Math.sin(lng / 2);
    return 6371 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }
}