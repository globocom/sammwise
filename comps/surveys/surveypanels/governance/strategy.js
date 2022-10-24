const strategy =()=>{
    return({
      "type": "panel",
      "name": "Strategy and Metrics",
      "elements": [
        {
          name:"question1",
          "type": "radiogroup",
          "id": "64f49a28334e4a40a04e534225a941d2",
          "title": "Vocês entendem o apetite de risco da organização para as suas aplicações?",
          "titleLocation": "left",
          "description": "Vocês conhecem a disposição a riscos das lideranças executivas da organização",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, conheço os riscos em geral"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, conheço os riscos específicos para nossa organização"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, conheço os riscos e oportunidades"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "8fd0374f0b63476eacb3cadca99b1538",
          "title": "Vocês tem um plano estratégico para segurança de aplicações e usam ele para tomar decisões?",
          "titleLocation": "left",
          "description": "O plano reflete as prioridades de negócio da organização e a disposição a riscos",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, nós o revisamos uma vez por ano"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, nós consultamos o plano antes de domar decisões significativas"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, nós consultamos o plano frequentemente e ele está alinhado com nossa estratégia para segurança de aplicações"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "74eaee0cbf454a46adeb2619850bbcb3",
          "title": "Vocês revisam e atualizam o plano estratégico de segurança de aplicações com regularidade?",
          "titleLocation": "left",
          "description": "Vocês revisam e atualizam o plano em resposta a mudanças significativas no ambiente de negócios, na organização ou na sua disposição para riscos",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, mas a revisão é sob demanda"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, a revisão é feita em intervalos regulares"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, nós revisamos o plano pelo menos uma vez por ano"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "6aa85d5f3c03428aa064447fa50fa66b",
          "title": "Vocês usam um conjunto de métricas para a efetividade e eficácia do programa de segurança de aplicações em diferentes aplicações?",
          "titleLocation": "left",
          "description": "Vocês documentam cada métrica, incluindo uma descrição das fontes, cobertura das medições e guias de como usar cada métrica para explicar tendências de segurança de aplicações",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, para uma única categoria de métricas"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, para duas categorias de métricas"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, para todas as três categorias de métricas"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "26f12b057f2b44f386d9af391383b590",
          "title": "Vocês definem indicadores chave de performance (KPIs) à partir das métricas de segurança de aplicações disponíveis?",
          "titleLocation": "left",
          "description": "Vocês definiram KPIs depois de coletar informações suficientes para determinar objetivos realistas",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, para algumas métricas"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, para pelo menos metade das métricas"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, para a maioria ou todas as métricas"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "efdc34fbb75b405b8107d63d58fa7286",
          "title": "Vocês atualizam o roadmap de segurança de aplicações com base nas métricas e KPIs de segurança de aplicações?",
          "titleLocation": "left",
          "description": "Vocês revisam os KPIs pelo menos uma vez por ano em relação à sua eficácia e eficiência",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "Não"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Sim, mas a revisão é sob demanda"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Sim, revisamos em intervalos regulares"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Sim, revisamos pelo menos uma vez por ano"
            }
          ]
        }
      ],
      "title": "Estratégia e Métricas",
      "state": "expanded"
    });
}

export default strategy;