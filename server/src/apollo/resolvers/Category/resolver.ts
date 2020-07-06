import { 
  Resolver, 
  Query
} from 'type-graphql';
import Category from '../../../database/models/Category/model';

@Resolver()
export default class CategoryResolver {
  @Query((returns) => [Category], { 
    defaultValue: [] 
  })
  fetchAllCategories() {
    return Category.findAll();
  }
}