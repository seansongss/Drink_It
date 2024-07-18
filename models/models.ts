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
