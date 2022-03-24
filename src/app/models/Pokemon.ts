import {Category} from "./enums/Category";
import {Type} from "./enums/Type";

export class Pokemon {
  private _id: number;
  private _nom: string;
  private _category: Category;
  private _type: Type[];
  private _size: number;
  private _weight: number;
  private _img: string;

  constructor(id: number, nom: string, category: Category, type: Type[], size: number, weight: number, img: string) {
    this._id = id;
    this._nom = nom;
    this._category = category;
    this._type = type;
    this._size = size;
    this._weight = weight;
    this._img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  get type(): Type[] {
    return this._type;
  }

  set type(value: Type[]) {
    this._type = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}
