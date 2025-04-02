---
sidebar_position: 7
---

# BPMN - Dicas de Programação
### 1. Amostragem de Etapas anteriores em Iframes

Um _Iframe_ é um componente que nos permite visualizar uma determinada página dentro da página actual. Com isso é possível utilizar um _Iframe_ para mostrar dados preenchidos numa determinada etapa do processo. Fazendo o _set_ do _Iframe_ como, por exemplo podemos ver no código seguinte onde é enviado por parâmetro o _Id_ de uma determinada Etapa.
`model.setIframe_1_src(Core.getIGRPLink("igrp","Detalhes_tarefas","index&target=_blank&"+BPMNConstants.PRM_TASK_ID+"="+Core.getTaskHistory("Task2").getId());`