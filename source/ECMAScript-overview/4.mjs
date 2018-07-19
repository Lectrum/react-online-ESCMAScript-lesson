'use strict';

const f = (title) => {
    this.title = title;
    console.log(this.title);
};

new f('Entity');
