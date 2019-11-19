// Given two strings s and t , write a function to determine if t is an anagram of s.

const isAnagram = (s, t) => {
  let hash1 = {},
    hash2 = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    !hash1.hasOwnProperty(s[i]) ? (hash1[s[i]] = 1) : hash1[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    !hash2.hasOwnProperty(t[i]) ? (hash2[t[i]] = 1) : hash2[t[i]]++;
  }
  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) return false;
  }
  return true;
};
