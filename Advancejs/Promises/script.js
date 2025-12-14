function getdata(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 3) {
        reject("ID not found");
      } else {
        console.log("Data", ID);
        resolve("Task Done");
      }
    }, 5000);
  });
}

getdata(1)
  .then((rse) => {
    return getdata(2);
  })
  .then((rse) => {
    return getdata(3);
  })
  .then((rse) => {
    return getdata(4);
  })
  .then((rse) => {
    return getdata(5);
  })
  .catch((rej) => {
    console.log(rej);
  });
