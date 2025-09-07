import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public created_at!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: true,        
    createdAt: 'created_at',
    updatedAt: false
  }
);
