


function addingDatas(){
   
    var selectedFoods = [];
    var selectElement = document.getElementById("inputFood");
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            selectedFoods.push(selectElement.options[i].text);
            
        }
    }
var firstName = document.getElementById("firstNamee").value;
var LastName = document.getElementById("LastNamee").value;
var Address = document.getElementById("inputAddress").value;
var pin = document.getElementById("pincode").value; 
var gender = document.getElementById("inputGender").value; 
var food = document.getElementById("inputFood").value; 
var state = document.getElementById("inputState").value; 
var country = document.getElementById("inputCountry").value; 



if (!firstName || !LastName || gender === "Gender" ) {
    alert("Please fill out all required fields correctly.");
    event.preventDefault();
    return ;
} // Stop further execution if validation fails 



    else if (selectedFoods.length < 2  ) {
        alert("Plese enter more than one food");
        event.preventDefault();
        return ;} // Stop further execution if validation fails 
    


var tbody = document.getElementById("tableBody");
var trow = document.createElement("tr");
trow.innerHTML = `

<td scope="col">${firstName}</td>
<td scope="col">${LastName}</td>
<td scope="col">${Address}</td>
<td scope="col">${pin}</td>
<td scope="col">${gender}</td>

<td scope="col">${selectedFoods.join(",")}</td>
<td scope="col">${state}</td>
<td scope="col">${country}</td>



`;
tbody.append(trow)


}

