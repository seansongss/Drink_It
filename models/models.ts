import Realm from "realm";

export type like = {
  _id: Realm.BSON.ObjectId;
  createdAt: Date;
  recipeId?: recipe;
  userId?: user;
};

export type recipe = {
  _id: Realm.BSON.ObjectId;
  createdAt: Date;
  defaultSize: Realm.BSON.Decimal128;
  description?: string;
  like?: number;
  liquorList: Realm.List<number>;
  name: string;
  percent: Realm.BSON.Decimal128;
  ratio: Realm.List<Realm.BSON.Decimal128>;
  type: number;
  updatedAt: Date;
  userId: number;
};

export type user = {
  _id: Realm.BSON.ObjectId;
  createdAt: Date;
  dateOfBirth?: Date;
  gender?: string;
  isFirstTime: boolean;
  modifiedAt?: Date;
  preference?: user_preference;
  user_id: string;
  username?: string;
};

export type user_preference = {
  preferLanguage?: string;
  preferRegion?: string;
};

export type record = {
  _id?: Realm.BSON.ObjectId;
  condition: number;
  count: Realm.List<number>;
  createdAt: Date;
  endTime: Date;
  location?: string;
  memo?: string;
  recipeList: Realm.List<number>;
  startTime: Date;
  updatedAt: Date;
  userId?: user;
};
