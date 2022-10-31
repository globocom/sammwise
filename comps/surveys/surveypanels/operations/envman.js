const envman = () => {return ({
    "type": "panel",
    "name": "Gestão de Ambientes",
    "elements": [
      {
        "type": "radiogroup",
        "id": "1e005e11997f4929a12fdb939599e77e",
        "title": "Vocês fazem hardening nas configurações dos componentes chaves das suas stacks de tecnologia?",
        "titleLocation": "left",
        "description": "Vocês identificaram os componentes chave em cada uma das stacks de tecnologia utilizadas",
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
        "id": "41d33402a94c49538554ce77e9de6a72",
        "title": "Vocês possuem baselines de hardening para seus componentes?",
        "titleLocation": "left",
        "description": "Vocês definiram um dono para cada baseline",
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
        "id": "f4ec030280ee417099eaf12752a542ae",
        "title": "Você monitora e reforça a conformidade com os baselines de hardening?",
        "titleLocation": "left",
        "description": "Vocês realizam checagens de conformidade periodicamente, preferencialmente usando automações",
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
        "id": "180e194b165d421c9d2c89258195a792",
        "title": "Vocês identificam e corrigem componentes vulneráveis?",
        "titleLocation": "left",
        "description": "Vocês tem uma lista atualizada de componentes, incluindo informações de versão",
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
        "id": "0844b1a3be8b49ec83c7377a9f797cfc",
        "title": "Vocês seguem um processo estabelecido para atualizar componentes de sua stack de tecnologia?",
        "titleLocation": "left",
        "description": "O processo inclui informações do fornecedor para patches de terceiros",
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
        "id": "6e72179a31c04024bb649346bfb03eb5",
        "title": "Vocês avaliam regularmente os componentes e revisa o status do nível de correção?",
        "titleLocation": "left",
        "description": "Vocês atualizam a lista com componentes e suas versões",
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
      }
    ],
    "title": "Gestão de Ambientes",
    "state": "collapsed"
  });}
export default envman;