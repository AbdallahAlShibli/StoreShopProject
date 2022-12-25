function Plant(namm, colorrr, agee, pricee)
 {
    this.nam = namm;
    this.colorr = colorrr;
    this.age = agee;
    this.price = pricee;
    
    }
   let plant1 = new Plant('flower', 'yello',2, 5);
   let plant2 = new Plant('orchid', 'red', 3, 5);
    //document.getElementById(“demo”).innerHTML =“The plant is ” + plant.nam();
    const t1=new Array(plant1,plant2);
    function addplant()
    {
    
   // t1.push(pl);
   var a=document.f1.nnn.value;
   var b=document.f1.ccc.value;
   var c= document.f1.aaa.value;
   var d=document.f1.ppp.value;
   let pl = new Plant(a,b,c,d );
   
    
    t2.push(pl);
    alert('element added ok');
    }
    
    function Tre(nmm, typp, originn, heitt) {
    this.nm = nmm;
    this.typ = typp;
    this.origin = originn;
    this.heit = heitt;
    
    }
    let tree1 = new Tre('olive','greenolive','spain', 3);
   let tree2 = new Tre('coffee', 'leaf tree','Brazil', 4);
    //document.getElementById(“demo”).innerHTML =“The plant is ” + tree.nm();
    
    
const   t2=new Array(tree1,tree2);
   

function tab() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    var row   = tbl.insertRow(0);
    row.insertCell(0).outerHTML = "<th>Name</th>"; 
    row.insertCell(1).outerHTML = "<th>Type</th>";
    row.insertCell(2).outerHTML = "<th>Origin</th>";
    row.insertCell(3).outerHTML = "<th>Height</th>"; 


    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

       
        const cell = document.createElement("td");
        const cellText = document.createTextNode(t2[i].nm);
        cell.appendChild(cellText);
        row.appendChild(cell);

        const cell1 = document.createElement("td");
        const cellText1 = document.createTextNode(t2[i].typ);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        const cellText2 = document.createTextNode(t2[i].origin);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);


        const cell3 = document.createElement("td");
        const cellText3 = document.createTextNode(t2[i].heit);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);
      
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    
  }
  function tab1() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    var row   = tbl.insertRow(0);
    row.insertCell(0).outerHTML = "<th>Name</th>"; 
    row.insertCell(1).outerHTML = "<th>Color</th>";
    row.insertCell(2).outerHTML = "<th>Age</th>";
    row.insertCell(3).outerHTML = "<th>Price</th>"; 


    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

       
        const cell = document.createElement("td");
        const cellText = document.createTextNode(t1[i].nam);
        cell.appendChild(cellText);
        row.appendChild(cell);

        const cell1 = document.createElement("td");
        const cellText1 = document.createTextNode(t1[i].colorr);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        const cellText2 = document.createTextNode(t1[i].age);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);


        const cell3 = document.createElement("td");
        const cellText3 = document.createTextNode(t1[i].price);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);
      
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    
  }

function addtree()
{



    
}











    