const sectest = () => {return ({
    "type": "panel",
    "name": "Security Testing",
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
            "text": "Yes, some of them"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of them"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of them"
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
            "text": "Yes, some of them"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of them"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of them"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "009a8fafe5dd41889947a6b2c6769bbe",
        "title": "Você integra testes de segurança automatizados nos processos de build  e implantação?",
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
            "text": "Yes, some of it"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of it"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of it"
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
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
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
            "text": "Yes, but we improve it ad-hoc"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, we we improve it at regular times"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, we improve it at least annually"
          }
        ]
      }
    ],
    "title": "Security Testing",
    "state": "collapsed"
  });}
export default sectest;