import envman from "../surveypanels/Operações/envman"
import incman from "../surveypanels/Operações/incman"
import opman from "../surveypanels/Operações/opman"


//Skeleton of the Page 
var tosend = {
    name: "Operações",
    elements: [{
         //Append later
    
    }
    ]

}
//Push elements to Skeleton 
tosend.elements.push(incman())
tosend.elements.push(envman())
tosend.elements.push(opman())

const OperaçõesJSON = () => {
    return ( 
        tosend
     );
}
 
export default OperaçõesJSON;