const securedeployment = () => {return ({
    "type": "panel",
    "name": "Secure Deployment",
    "elements": [
      {
        "type": "radiogroup",
        "id": "24697d43707b4d83a6a5819a9db9a75d",
        "title": "Você usa processos de implantação repetíveis?",
        "titleLocation": "left",
        "description": "Você tem informações suficientes para executar os processos de implantação",
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
        "id": "7ef6753cda0d4da6ad194e56650f584d",
        "title": "Os processos de deployment são automatizados e empregam verificações de segurança?",
        "titleLocation": "left",
        "description": "Os processos de deployment são automatizados em todos os estágios",
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
        "id": "f87fddbf283a4c38b45a3125d827dd27",
        "title": "Você valida consistentemente a integridade dos artefatos implantados?",
        "titleLocation": "left",
        "description": "Você impede ou cancela o deploy se detectar uma violação de integridade",
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
        "id": "37c6a5618a6344b386eb872619cfe53f",
        "title": "Você limita o acesso as secrets do aplicativo de acordo com o princípio de privilégio mínimo?",
        "titleLocation": "left",
        "description": "Você armazena as secrets de produção em um local seguro",
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
        "id": "c5f66e97db174d8c9dc2d82fbad9d4e3",
        "title": "Você injeta secrets de produção nos arquivos de configuração durante o deploy?",
        "titleLocation": "left",
        "description": "Os arquivos de código-fonte não contêm mais secrets de aplicativos ativos",
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
        "id": "50af7a14ddf2408fb4576e3972cf13e3",
        "title": "Você pratica o gerenciamento adequado do ciclo de vida das secrets do aplicativo?",
        "titleLocation": "left",
        "description": "Você gera e sincroniza secrets usando uma solução aprovada",
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
    "title": "Secure Deployment",
    "state": "collapsed"
  });}
export default securedeployment;