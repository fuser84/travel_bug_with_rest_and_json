import { CommentLink } from './commentLink';

export class Festival {
  id: number;
  name: string;
  image: string;
  music_style: string;
  attendance_price: number;
  featured: boolean;
  description: string;
  comments: CommentLink[];
  latitude: number;
  longitude: number;
}
