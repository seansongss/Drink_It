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

export const likeSchema = {
    name: 'like',
    properties: {
        _id: 'objectId',
        createdAt: 'date',
        recipeId: 'recipe',
        userId: 'user',
    },
    primaryKey: '_id',
};

export const recipeSchema = {
    name: 'recipe',
    properties: {
        _id: 'objectId',
        createdAt: 'date',
        defaultSize: 'decimal128',
        description: 'string?',
        like: 'int?',
        liquorList: 'int[]',
        name: 'string',
        percent: 'decimal128',
        ratio: 'decimal128[]',
        type: 'int',
        updatedAt: 'date',
        userId: 'int',
    },
    primaryKey: '_id',
};

export const recordSchema = {
    name: 'record',
    properties: {
        _id: 'objectId?',
        condition: 'int',
        count: 'int[]',
        createdAt: 'date',
        endTime: 'date',
        location: 'string?',
        memo: 'string?',
        recipeList: 'int[]',
        startTime: 'date',
        updatedAt: 'date',
        userId: 'user',
    },
    primaryKey: '_id',
};
