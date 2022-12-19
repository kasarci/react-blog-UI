import { ICategory } from './ICategory';
import {IComment} from './IComment'
import { ITag } from './ITag';

export interface IPost {
  id: string;
  createdAt: Date;
  writerId: string;
  title: string;
  content: string;
  categories: ICategory[];
  tags: ITag[];
  comments: IComment[];
  likes: number;
}