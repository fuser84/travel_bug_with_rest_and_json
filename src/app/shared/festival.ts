import { CommentLink } from './commentLink';

export class Festival {
  name: string;
  image: string;
  music_style: string;
  attendance_price: string;
  description: string;
  comments: CommentLink[];
  latitude: number;
  longitude: number;
}
