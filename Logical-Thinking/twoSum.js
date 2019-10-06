/**

Give a array [a1, a2, a3, ..., an] and 'target'

outout: find sum of any element is equal to target 
 
*/

// solution 1: 
/**
BigO(nxn)
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 26));


// solution 2
/**
BigO(n), using hashmap()
*/

var twoSumSolution2 = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const remain = target - nums[i];
        if (map.has(remain)) {
            return [map.get(remain), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return []
}
console.log(twoSumSolution2([2, 7, 11, 15], 18));