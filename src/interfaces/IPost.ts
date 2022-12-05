import {IComment} from './IComment'

export interface IPost {
  post: string,
  title: string,
  writerName: string,
  dateTime: string,
  categories: string[],
  tags?: string[],
  likes: number,
  comments: IComment[]
}