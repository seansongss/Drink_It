export const userSchema = {
    name: 'user',
    properties: {
        _id: 'objectId',
        createdAt: 'date',
        dateOfBirth: 'date?',
        gender: 'string?',
        isFirstTime: 'bool',
        modifiedAt: 'date?',
        preference: 'user_preference',
        user_id: 'string',
        username: 'string?',
    },
    primaryKey: '_id',
};

export const user_preferenceSchema = {
    name: 'user_preference',
    embedded: true,
    properties: {
        preferLanguage: 'string?',
        preferRegion: 'string?',
    },
};

export const recipeTestSchema = {
    name: 'recipeTest',
    properties: {
        _id: 'objectId',
        alcohol: 'double',
        createdAt: 'date',
        creator: 'string',
        description: 'string?',
        modifiedAt: 'date?',
        recipeName: 'string',
        recipeType: 'string',
    },
    primaryKey: '_id',
};

