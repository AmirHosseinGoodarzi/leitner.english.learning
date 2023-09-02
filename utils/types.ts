import { CategoryEnum } from "./enums";

export interface WordType {
  _id: string;
  user: string;
  front: string;
  back: string;
  category: CategoryEnum;
  movedTo: string;
}
