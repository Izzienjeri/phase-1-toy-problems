function marksprompt (marks) {
  if (marks => 80 && marks <= 100) {
    return "A";
    }
  else if (marks => 60 && marks < 80) {
        return "B";
    }
  else  if (marks => 50 && marks < 60) {
        return "C";
    }
  else if (marks => 0 && marks < 40) {
    return "Error! Please input marks between 0 and 100"
  }
}
