const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

console.log(colors);

//with reverse method
// const reversed = colors.reverse();
// console.log(reversed);

//for of method unshift
// const rev_colors = [];
// for(const rev of colors){
//     rev_colors.unshift(rev);
// }
// console.log(rev_colors);

//for method unshift
// const rev_colors = [];
// for(let i = 0;i < colors.length;i++){
//     const rev = colors[i];
//     rev_colors.unshift(rev);
// }
// console.log(rev_colors);

//reversed side push
const rev_rev_colors = [];
for(let i = colors.length - 1; i >=0;i--){
    const rev = colors[i];
    // console.log(rev);
    rev_rev_colors.push(rev);
}
console.log(rev_rev_colors);


