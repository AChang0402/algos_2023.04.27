/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

const heights5 = [3,1,4,1,5,85,655,2,2351,65,231,86432,212,2,3,3,858,86,2,88,6,21,]

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
// function containerWithMostWater(heights) {
//     let maxArea = 0;
//     for (let i=0; i<heights.length-1; i++){
//         for (let j=i+1; j<heights.length; j++){
//             let height = (heights[i]<heights[j] ? heights[i]:heights[j])
//             if ((height * (j-i)) > maxArea){
//                 maxArea = height * (j-i);
//             }
//         }
//     }
//     return maxArea
// }

function containerWithMostWater(heights) {
    let a = 0
    let b = heights.length - 1
    let area = 0
    let height = 0
    let length = 0
    let newArea = 0
    while (a < b){
        length = b - a
        height = heights[a] < heights[b] ? heights[a] : heights[b]
        newArea = length * height
        newArea > area && (area = newArea)
        heights[a]<heights[b]? a++ : b--
    }
    return area
}

// function containerWithMostWater(heights) {
//     let i = 0
//     let j = heights.length - 1
//     let maxArea = 0
//     let height = 0
//     while (i < j) {
//         height = (heights[i] < heights[j] ? heights[i] : heights[j])
//         if ((height * (j-i)) > maxArea) {
//             maxArea = height * (j-i);
//         }
//         if (heights[i] < heights[j]) {
//             i++
//         }
//         else {
//             j--
//         }
//     }
//     return maxArea
// }

console.log(containerWithMostWater(heights1))
console.log(containerWithMostWater(heights2))
console.log(containerWithMostWater(heights3))
console.log(containerWithMostWater(heights4))
console.log(containerWithMostWater(heights5))