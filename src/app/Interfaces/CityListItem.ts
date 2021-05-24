import { ListItem } from './ListItem';

export interface CityListItem extends ListItem {
  name: string;
  bookmarked: boolean;
}
