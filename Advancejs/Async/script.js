async function getdata(ID) {
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

 await getdata(1);
  // console.log(res);

  await getdata(2);

  await getdata(3);

  await getdata(4);

  await getdata(5);


  
