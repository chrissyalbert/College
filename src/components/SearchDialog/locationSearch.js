export const stateParams = state => {
  switch(state) {
    case 'Alabama':
      return 1;
      break;

    default:
      return null;
    
  }
}
export const regionParams = region => {
  switch(region) {
    case 'U.S. Service School':
      return 0;
      break;

      default:
        return null;
  }
}

export const urbanParams = urban => {
  switch(urban) {
    case 'Large City':
      return 1;
      break;

    default:
      return null;
  }
}