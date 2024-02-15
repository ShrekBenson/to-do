export function prioritySelected(low, high) {
  if (low.classList.contains('select')) {
    return low.value;
  } else if (high.classList.contains('select')) {
    return high.value;
  } else{
    return 'No priority';
  }
}