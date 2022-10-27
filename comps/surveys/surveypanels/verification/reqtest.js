const reqtest = () => {return ({
    "type": "panel",
    "name": "Testes baseados em requisitos",
    "elements": [
      {
        "type": "radiogroup",
        "id": "cb085e0a25724700bc10c73cfcc8f6a5",
        "title": "Você testa suas aplicações para o funcionamento correto dos controles de segurança?",
        "titleLocation": "left",
        "description": "O testes de segurança verificam pelo menos a implementação da autenticação, controle de acesso, validação de entrada, codificação e escape de dados e controles de criptografia",
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
        "id": "d6b26a63243d4142bd2a8317e2875a03",
        "title": "Você escreve e executa consistentemente scripts de teste para verificar a funcionalidade dos requisitos de segurança?",
        "titleLocation": "left",
        "description": "Você faz testes sob medida para cada aplicação e verfica as funcionalidades de segurança esperadas",
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
        "id": "35413be30d9f415dbde45edbe3b17f31",
        "title": "Do you automatically test applications for security regressions?",
        "titleLocation": "left",
        "description": "You consistently write tests for all identified bugs (possibly exceeding a pre-defined severity threshhold)",
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
        "id": "749893a53df24c32bc887b6d5f7b3f7b",
        "title": "Você testa aplicações usando técnicas de randomização ou fuzzing?",
        "titleLocation": "left",
        "description": "O teste abrange a maioria ou todos os principais parâmetros de entrada da aplicação",
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
        "id": "b2afb33fe6ef4b6e90e029059f7a7124",
        "title": "Você cria casos de abuso a partir de requisitos funcionais e os usa para conduzir testes de segurança?",
        "titleLocation": "left",
        "description": "Funcionalidades de negócio importantes possuem casos de abuso correspondentes",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, algumas vezes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos na metade das vezes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, na maioria ou em todas as vezes"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "814caca2fc5241dcb90c48302ac031b2",
        "title": "Você executa negação de serviço e testes de estresse de segurança?",
        "titleLocation": "left",
        "description": "Os testes de estresse visam recursos especificos da aplicação (por exemplo, esgotamento de memória ao salvar grandes quantidades de dados em uma sessão de usuário)",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Não"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Sim, algumas vezes"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Sim, pelo menos na metade das vezes"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Sim, na maioria ou em todas as vezes"
          }
        ]
      }
    ],
    "title": "Testes baseados em requisitos",
    "state": "collapsed"
  });}
export default reqtest;