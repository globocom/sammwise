const securebuild = () => {return ({
  "type": "panel",
  "name": "Build Seguro",
  "elements": [
    {
      "type": "radiogroup",
      "id": "70d6044a223b402c8e2b6f9d1e936641",
      "title": "Todo seu processo de build está formalmente descrito?",
      "titleLocation": "left",
      "description": "Você tem informações suficientes para recriar os processos de build",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    },
    {
      "type": "radiogroup",
      "id": "b5d33583538b4878bb4674a5f838b8ea",
      "title": "O processo de build é totalmente automatizado?",
      "titleLocation": "left",
      "description": "O processo de build em si não requer nenhuma interação humana",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    },
    {
      "type": "radiogroup",
      "id": "ee775955bf7f48d294c75f6384232f48",
      "title": "Você impõe verificações de segurança automatizadas em seus processos de build?",
      "titleLocation": "left",
      "description": "Os builds falham se o aplicativo não atender aos testes de segurança predefinidos",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    },
    {
      "type": "radiogroup",
      "id": "1e28b82cc3ba4e4ea2552746e17c25af",
      "title": "Você tem um conhecimento sólido sobre as dependências nas quais está utilizando?",
      "titleLocation": "left",
      "description": "Você tem uma lista de materiais (Bill of Materials) atualizada para cada aplicação",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    },
    {
      "type": "radiogroup",
      "id": "ef798e60155d453186364c94a8f8935d",
      "title": "Você tem um processo formal de gerenciamento de risco de dependências terceiras?",
      "titleLocation": "left",
      "description": "Você mantém uma lista de dependências aprovadas que atendem a critérios predefinidos",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    },
    {
      "type": "radiogroup",
      "id": "418e98e2939546e69a24d0c3c4c8d217",
      "title": "Você impede o build da aplicação, caso ele seja afetado por uma vulnerabilidade de dependência?",
      "titleLocation": "left",
      "description": "Seu processo de build está conectado a um sistema para rastrear o risco de dependência de terceiros, fazendo com que o build falhe, a menos que a vulnerabilidade seja avaliada como um falso positivo ou o risco seja explicitamente aceito",
      "choices": [
        {
          "value": 0,
          "weight": 1,
          "text": "Não"
        },
        {
          "value": 0.25,
          "weight": 1,
          "text": "Sim, para algumas aplicações"
        },
        {
          "value": 0.5,
          "weight": 1,
          "text": "Sim, para pelo menos metade das aplicações"
        },
        {
          "value": 1,
          "weight": 1,
          "text": "Sim, para a maioria ou todas as aplicações"
        }
      ]
    }
  ],
  "title": "Build Seguro",
  "state": "expanded"
});}
export default securebuild;
