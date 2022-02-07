var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
  ];

  let wrapperEle = document.body.querySelector(".wrapper");
  let clickerEle=document.body.querySelector("#clicker");
  let characterEle=document.body.querySelector(".character");


  var i=0;
  clickerEle.addEventListener("click", function(){
      if (i+1 > chrs.length){
          i=0;
      }
      loop(i);
      i++;
  }


  )
  function loop(index){
    var ele = document.createElement("div");
    ele.className="character"
    var nameEle = document.createElement("h4");
    var classEle = document.createElement("h4");
    var vehicleEle = document.createElement("h4");
    
  
    nameEle.innerHTML = "Name: " + chrs[index].name;
    chrs[index].class=chrs[index].class.toUpperCase();
    classEle.innerHTML = "Class: " + chrs[index].class;
    vehicleEle.innerHTML = "Vehicle: " + chrs[index].vehicle;
   
    if (chrs[index].afl=="autobot"){
        nameEle.className='autobot';
        classEle.className='autobot';
        vehicleEle.className='autobot';
        var img=document.createElement("img");
        img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
        img.className="img"
    }
  
    if (chrs[index].afl=="decepticon"){
        nameEle.className='decepticon';
        classEle.className='decepticon';
        vehicleEle.className='decepticon';
        var img=document.createElement("img");
        img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
        img.className="img"
    }

    if(chrs[index].vehicle=="truck"){
        vehicleEle.style.color="blue";
    }

    if(chrs[index].vehicle=="tank"){
        vehicleEle.style.color="green";
    }

    if(chrs[index].vehicle=="car"){
        vehicleEle.style.color="yellow";
    }


  
    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);
    ele.appendChild(img)

    characterEle.appendChild(ele);
  }