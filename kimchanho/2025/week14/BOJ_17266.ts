/**
* @title 굴다리 (17266) 
* @description 
* @author Chanho Kim
* @see https://www.acmicpc.net/problem/
*/
const fs = require('node:fs');
const inputTarget =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(inputTarget, 'utf8').trim().split('\n');
const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2].split(" ").map(Number);

// 시작지점부터 가장 앞의 가로등사이 길이와 끝지점과 가장 뒤의 가로등 사이의 길이 중 가장 긴 길이를 구한다.
let maxLength = Math.max(arr[0], N - arr[M - 1]);
// 가로등과 가로등 사이의 길이를 절반으로 나누어서 가장 긴 길이를 구한다.
for (let i = 1; i <= M - 1; i++) {
  const length = Math.ceil((arr[i] - arr[i - 1]) / 2);
  maxLength = Math.max(maxLength, length);
}

console.log(maxLength);

/**
 *     1            2                       3      4 
 * --------------------------------------------------------
 * 
 * ----                                             -------  
 *     1            2                       3      4 
 * --------------------------------------------------------
 * 길이 4와 7중 긴 값을 maxLength에 저장
 * 
 *      ------------
 *     1            2                       3      4 
 * --------------------------------------------------------
 * 가로등1과 2사이의 길이를 절반으로 나누어서 maxLength와 비교
 * 
 *                   -----------------------         
 *     1            2                       3      4
 * --------------------------------------------------------
 * 가로등2와 3사이의 길이를 절반으로 나누어서 maxLength와 비교
 * 
 *                                           ------         
 *     1            2                       3      4
 * --------------------------------------------------------
 * 가로등3과 4사이의 길이를 절반으로 나누어서 maxLength와 비교
 * 
*/