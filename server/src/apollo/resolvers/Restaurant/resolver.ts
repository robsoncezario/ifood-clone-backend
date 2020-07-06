import { 
  Resolver, 
  Query,
  Arg,
  Int
} from 'type-graphql';

import Restaurant from '../../../database/models/Restaurant/model';

@Resolver()
export default class RestaurantResolver {
  @Query((returns) => [Restaurant], {defaultValue: []})
  async fetchAllRestaurants() {
    return await Restaurant.findAll();
  }

  @Query((returns) => [Restaurant], {defaultValue: []})
  async fetchAllRestaurantsByCategory(@Arg('categoryId') categoryId: number) {
    return await Restaurant.findAll({
      where: {
        categoryId: categoryId
      }
    });
  }

  @Query((returns) => Restaurant, {defaultValue: {}})
  async fetchRestaurantDetails(@Arg('restaurantId') restaurantId: number) {
    return await Restaurant
      .scope('withDetails')
      .findByPk(restaurantId);
  }
}