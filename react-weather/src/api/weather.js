const conditionXHR = new XMLHttpRequest();

export function fetchConditionData(onLoad){
    navigator.geolocation.getCurrentPosition(fetchConditionData);
    function fetchConditionData(position){
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
    conditionXHR.open('GET','https://api.darksky.net/forecast/ef277ad6cb279351b933d88a8c90a1a0/'+lat+','+lon+'');
    conditionXHR.send();
    conditionXHR.onload=()=>{
        if (conditionXHR.status===200){
            console.log(conditionXHR.responseText);
            const dataObj=JSON.parse(conditionXHR.responseText);
            onLoad(dataObj)
        }
    }
}
}


 
 
     

       
    

