pannellum.viewer('panorama-360-view', {
    "type": "equirectangular",
    "panorama": "assests/img360.jpg",
    "autoLoad": true
})

let sw = 0;
        function loadXMLDoc() {
            sw = !sw;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
  
                // Request finished and response 
                // is ready and Status is "OK"
                if (this.readyState == 4 && this.status == 200) {
                    if(sw){
                        empDetails(this);
                    }
                   else{
                    document.getElementById("display").innerHTML = '';
                   }
                }
            };
  
            // employee.xml is the external xml file
            xmlhttp.open("GET", "branch.xml", true);
            xmlhttp.send();
        }
  
        function empDetails(xml) {
            var i;
            var xmlDoc = xml.responseXML;
            var table =
                `<tr><th>branch name</th><th>phone number</th>
                    <th>Address</th>
                </tr>`;
                
            var x = xmlDoc.getElementsByTagName("branch");
            var xy = xmlDoc.getElementsByTagName("dealer"); 

/*             newElement = xmlDoc.createElement("Heading");
            newText=xmlDoc.createTextNode("Show room branches");
            newElement.appendChild(newText);
            /* xy[0].appendChild(newElement);
            console.log(xy);
 */
   
            
            for (i = 0; i < x.length; i++) {
                         
            /*
                    Deleting the zenith row             
            */

                if (x[i].getElementsByTagName("branch_name")[0]
                .childNodes[0].nodeValue == "zenith"){

                    var x1 = xmlDoc.getElementsByTagName("branch")[i];
                    x1.parentNode.removeChild(x1);
                }

                    /**
                     * Citizen carz address is deleted
                     */

                if (x[i].getElementsByTagName("branch_name")[0]
                .childNodes[0].nodeValue == "Citizen carz"){

     
                    x[i].getElementsByTagName("address")[0]
                    .childNodes[0].nodeValue = '';
                }


                if (x[i].getElementsByTagName("branch_name")[0]
                .childNodes[0].nodeValue == "i car"){

     
                    x[i].getElementsByTagName("branch_name")[0]
                    .childNodes[0].nodeValue = 'value changed';
                }

            }

            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("branch_name")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("phone")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("address")[0]
                    .childNodes[0].nodeValue 
            }


  
            // Print the xml data in table form
            document.getElementById("display").innerHTML = table;
        }