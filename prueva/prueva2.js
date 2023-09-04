const persona = '{"Nombre":"Marcos","Apellido":"Ferrero","DNI":"226098456","Nacionalidad":"Ecuatoriano","Celular":"0345-569876","Email":"MFerrero23@gmail.com"}';
const obj = JSON.parse(persona);
console.log(obj);
document.getElementById("demo").innerHTML = 
"Nombre: "+obj.Nombre+
"Apellido: "+obj.Apellido+
"DNI :"+obj.DNI;