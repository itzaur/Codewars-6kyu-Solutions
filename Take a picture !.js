/*
Description:
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
*/
function sortPhotos(pics) {
  const itemLengthWithoutLastNumber = 8;
  const mostRecentOnesImages = 5;
  const yearLength = 4;

  const result = pics.sort(
    (a, b) =>
      a.slice(0, yearLength) - b.slice(0, yearLength) ||
      a.slice(itemLengthWithoutLastNumber) -
        b.slice(itemLengthWithoutLastNumber)
  );

  const lastImage = result.at(-1);
  const newImage =
    lastImage.slice(0, itemLengthWithoutLastNumber) +
    (+lastImage.slice(itemLengthWithoutLastNumber) + 1);

  return [...result.slice(-mostRecentOnesImages), newImage];
  //////////////////////////////////////////////////////////////!SECTION
  //   pics = pics.sort(
  //     (a, b) =>
  //       a.match(/^\d+/)[0] - b.match(/^\d+/)[0] ||
  //       a.match(/\d+$/) - b.match(/\d+$/)
  //   );

  //   return [...pics.slice(-5), pics.at(-1).replace(/\d+$/, (m) => +m + 1)];
}

console.log(
  sortPhotos(['2016.img1', '2016.img2', '2016.img3', '2016.img4', '2016.img5'])
); //["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]
console.log(
  sortPhotos(['2016.img4', '2016.img5', '2016.img1', '2016.img3', '2016.img2'])
); //["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]
console.log(
  sortPhotos(['2012.img2', '2016.img1', '2016.img3', '2016.img4', '2016.img5'])
); //["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5","2016.img6"]
console.log(
  sortPhotos([
    '2016.img1',
    '2013.img3',
    '2016.img2',
    '2015.img3',
    '2012.img7',
    '2016.img4',
    '2013.img5',
  ])
); //["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
console.log(
  sortPhotos([
    '2016.img7',
    '2016.img2',
    '2016.img3',
    '2015.img3',
    '2012.img8',
    '2016.img4',
    '2016.img5',
  ])
); //["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]
