function addData()
{
  const web =  document.getElementById("webname").value.trim();
  const nm =  document.getElementById("name").value.trim();
  const pas =  document.getElementById("password").value.trim();

  const DataPack =
  {
    WebSite: web,
    Name: nm,
    Password: pas,
  };

  console.log(DataPack);
  let Data ;

  const savedData = localStorage.getItem("Password Manager");

  const parsedData = JSON.parse(savedData);

  if(parsedData){
    Data=parsedData;
  }else{
    Data=[];
  }



  Data.push(DataPack);

  const stringifiedData = JSON.stringify(Data);

  localStorage.setItem("Password Manager",stringifiedData );

  document.getElementById("webname").value = "";
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";

}

function download()
{
   const Data = JSON.parse(localStorage.getItem("Password Manager")) || []; 
   console.log(Data);
   

   if(Data.length <= 0) 
   {
    alert("No Data Found");
    return;
   }

   const headers = Object.keys(Data[0]).join(",") + "\n";

   const rows = Data.map((item) => Object.values(item).join(",")).join("\n");

   const CSVContent = headers + rows;

   const blob = new Blob([CSVContent],{type: "text/csv"});

   

   const anchortag = document.createElement("a");

   anchortag.href = URL.createObjectURL(blob);

   anchortag.download = "data.csv";
   anchortag.click();

   localStorage.removeItem("Password Manager");
}

