var tosend = {
  name: "Detalhes",
  elements: [{
    
      "type": "text",
      "name": "Nome da empresa",
     },
     {
      "type": "text",
      "name": "Nome do projeto"
     },
     {
      "type": "text",
      "name": "Descrição do projeto"
     }
    ],
    "description": "Estes dados são opcionais, o único uso para eles será para ajudar a categorizar os resultados que você recebe, por exemplo: título do documento de resultados ETC"

}




const detailsJSON = () => {
    return ( 
    tosend
     );
}
 
export default detailsJSON