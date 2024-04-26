export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    const suffix = getLast(); // Using const here
    let combination = 'But sometimes let';
    combination += suffix; // Reassigning combination here
  
    return combination;
  }
  