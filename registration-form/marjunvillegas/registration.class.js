class constructDropdown {
    instructor(data, type){
        this.data;
        this.type;
    }
}

function deleteData(){
    this.btnDelete = function() {
        document.getElementById("myForm").reset();
        console.log("Data Clear");
    }
}
classbtnDelete = new deleteData();


function addDataClass(){

    this.btnRegister = function() {

        let dataForm = {
            firstname : document.getElementById("firstname").value,
            lastname : document.getElementById("lastname").value,
            email :  document.getElementById("email").value,
            countryList : document.getElementById("countryList").value,
            cityList : document.getElementById("cityList").value,
            teamlist : document.getElementById("teamList").value,
            gender : document.getElementById("gender").value,
            password : document.getElementById("password").value,
            repassword : document.getElementById("repassword").value
        }

        let password = document.getElementById("password").value;
        let repassword = document.getElementById("repassword").value;

        if (password === repassword) {
            let test = localStorage.setItem("dataForm", JSON.stringify(dataForm));
            console.log(test)
            let getLocalStorage = localStorage.getItem("dataForm");
            console.log(getLocalStorage);
            alert("Successfully Registered") 

            classClear = new dataClearClass();

        }   else{
    
            alert("Passowrd does not match");
        }
    }
}
classbtnRegister = new addDataClass();

function dataClearClass(){
    this.clearDataClass = function(){
        document.getElementById("firstname").value = '';
        document.getElementById("lastname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("countryList").value = '';
        document.getElementById("cityList").value = '';
        document.getElementById("teamList").value = '';
        document.getElementById("password").value = '';
        document.getElementById("repassword").value = '';
    }
}
classClear = new dataClearClass();
