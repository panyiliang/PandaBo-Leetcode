/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs == null || strs.length == 0) return "";
  var temp_str = strs[0];
  var i = 1;
  while (i < strs.length) {
    if (strs[i].indexOf(temp_str) != 0) {
      temp_str = temp_str.substring(0, temp_str.length-1);
    } else {
      i++;
    }
  }
  return temp_str;
};

