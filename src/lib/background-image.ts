export const backgroundImage = (max:number):string => {
  const index = Math.floor(Math.random() * max) + 1
  return 'images/background-00' + index + '-min.jpg'
};
