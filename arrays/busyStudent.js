// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

const busyStudent = (startTime, endTime, queryTime) => {
  let atQueryTime = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (endTime[i] >= queryTime && startTime[i] <= queryTime) {
      atQueryTime += 1;
    }
  }
  return atQueryTime;
};
