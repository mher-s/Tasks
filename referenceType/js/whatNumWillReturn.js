let i = 0;

//             1 2 3 4 5

while (++i < 5) alert(i);

// will return 1 2 3 4


let i = 0;
//             0 1 2 3 4 5

while (i++ < 5) alert(i);

// will return 1 2 3 4 5

/////////////////////////////////////

for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);

// both will return 4 cuz start from 0