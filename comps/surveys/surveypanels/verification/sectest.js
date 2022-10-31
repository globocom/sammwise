const sectest = () => {return ({
    "type": "panel",
    "name": "Testes de Segurança",
    "elements": [
      {
        "type": "radiogroup",
        "id": "bef645da8ccd477bbd10685dd52ad40e",
        "title": "Você faz scans nas aplicações utilizando ferramentas automatizadas de teste de segurança?",
        "titleLocation": "left",
        "description": "Você gera dinamicamente entradas para testes de segurança usando ferramentas automatizadas",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, alguns deles"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos metade deles"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, a maioria ou todos eles"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "c013b6f9d973425cb63f21f4f8b84c30",
        "title": "Você personaliza as ferramentas de segurança automatizadas para seus aplicativos e pilhas de tecnologia?",
        "titleLocation": "left",
        "description": "Você ajusta e seleciona os recursos da ferramenta que correspondem a sua aplicação ou pilha de tecnologia",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, alguns deles"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos metade deles"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, a maioria ou todos eles"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "009a8fafe5dd41889947a6b2c6769bbe",
        "title": "Você integra testes de segurança automatizados nos processos de build e implantação?",
        "titleLocation": "left",
        "description": "A gerência e as partes interessadas rastreiam e revisam os resultados dos testes ao longo do ciclo de desenvolvimento",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, alguns"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos da metade"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, da maioria ou de todos"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "77dd81adf35f43608408e548c4972136",
        "title": "Você revisa manualmente a qualidade de segurança de componentes de alto risco selecionados?",
        "titleLocation": "left",
        "description": "Existem critérios para ajudar o revisor a se concentrar em componentes de alto risco",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, para alguns componentes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, para pelo menos metade dos componentes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, para a maioria ou todos os componentes"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "9a2af155ba424edfb321aa7592a09ed5",
        "title": "Você realiza pentests para seus aplicativos em intervalos regulares?",
        "titleLocation": "left",
        "description": "Os pentests usam casos de teste de segurança específicos da aplicação",
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
        "id": "b73bf8f0462340659e252e6471c6e831",
        "title": "Você usa os resultados dos testes de segurança para melhorar o ciclo de vida do desenvolvimento?",
        "titleLocation": "left",
        "description": "Você usa os resultados de outras atividades de segurança para melhorar os testes de segurança integrados durante o desenvolvimento",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, mas melhoramos ocasionalmente"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, melhoramos periodicamente"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, melhoramos pelo menos uma vez por ano"
          }
        ]
      }
    ],
    "title": "Testes de Segurança",
    "state": "collapsed"
  });}
export default sectest;