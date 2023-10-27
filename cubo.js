
// const a = '/\\'
// const b = '_\\'
// const _side= '\\/'
// const b2 = '_/'
// const e = ' '

// console.log( a + b)             // e=0  a=1  b=1
// console.log( _side+ b2)           // e=0 a2=1 2b=1

// console.log( e + a + b + b)     // e=1  a=1  b=2
// console.log( a + a +  b + b )   // e=0  a=2  b=2
// console.log( _side+ _side+ b2 + b2) // e=0 a2=2 b2=2
// console.log( e + _side+ b2 + b2)  // e=1 a2=1 b2=2

// console.log( e+e+a+b+b+b)       // e=2  a=1  b=3
// console.log( e+a+a+b+b+b)       // e=1  a=2  b=3
// console.log( a+a+a+b+b+b)       // e=0  a=3  b=3
// console.log( a2+a2+a2+b2+b2+b2) // e=0 a2=3 b2=3
// console.log( e+a2+a2+b2+b2+b2)  // e=1 a2=2 b2=3
// console.log( e+e+a2+b2+b2+b2)   // e=2 a2=1 b2=3

// const cubo = size => {

//   const a = '/\\'
//   const b = '_\\'
//   const _side= '\\/'
//   const b2 = '_/'
//   const e = ' '

//   let s = []


//     for( let _a = size; _a > 0; _a--) {
//     s.unshift(Array( ( size - _a) ).fill(e).join('') + Array(_a).fill(a).join('') + Array(size).fill(b).join(''))
//     s.push('\n')

//     s.push(Array( ( size - _a) ).fill(e).join('') + Array(_a).fill(a2).join('') + Array(size).fill(b2).join(''))
//     s.unshift('\n')
//   }

//   s.shift()
//   return s.join('')
// }

// console.log(cubo(2))













// const a = '/\\'
// const b = '_\\'
// const _side= '\\/'
// const b2 = '_/'
// const e = ' '


const cubo = (n, current = 1) => {

  if (current > n) return '';

  let spaces = ' '.repeat(n - current);
  let sideTop = '/\\'.repeat(current);
  let top = '_\\'.repeat(n);
  let sideBottom = '\\/'.repeat(current);
  let bottom = '_/'.repeat(n);

  const left = spaces + sideTop + top + '\n';
  const right = spaces + sideBottom + bottom + (current !== 1 ? '\n' : '');

  return left + cubo(n, current + 1) + right;

};

console.log(cubo(10));