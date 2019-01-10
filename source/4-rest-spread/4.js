const sum = (a, b, c) => {
    console.log(a + b + c);
};

const data = [ 2, 3, 4 ];

// spread → распределить, распылить
sum(1, ...data);
sum(1, 2, 3, 4);
