'use strict';

const user = {
    name: {
        en: {
            first: 'Jon',
        },
    },
};

const {
    name: { first },
} = user;

console.log('typeof first', typeof first);
