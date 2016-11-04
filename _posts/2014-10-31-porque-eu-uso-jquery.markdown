---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Porque eu uso jQuery?"
date:   2014-10-31
categories: javascript/jQuery
---
Vocês já se perguntaram isso?
Muitos dizem que é para <b>facilitar a vida</b>, <b>ganho de produtividade</b> e até mesmo por <b>preguiça</b>, mas será mesmo?

<h2>Facilitar a vida?</h2>
Já peguei vários projetos feito com jQuery que depois de muito tempo fui dar alguma manutenção ou atualizar e "deu ruim", pelo simple fato do jQuery usado ser uma versão bem antiga, um exemplo bem comum e simples de resolver é o finado <b>.live()</b> que foi deprecado na versão 1.7 e totalmente removido no versão 1.9, muitas vezes me peguei fazendo .replace('.live', '.on'), funciona??? 
<b>SIM, FUNCIONA</b>, mas esse é só um de vários problemas que acontece, já vi também projetos com mais de duas versões de jQuery sendo usada para conseguir funcionar todos os zilhões de plugins que o site tinha, e isso funciona??? 
É triste dizer mas... <b>SIM, FUNCIONA</b> talvez por que o carregamento dos scripts eram assíncronos, mas mesmo assim dava um erro ou outro de compatibilidade.

Portanto, precisa ter organização para realmente <b>facilitar a vida</b>.

<h2>Ganho de produtividade?</h2>
Sim esse eu concordo, mas em partes, o que é ganho em produtividade é perdido em performance sendo que o jQuery usa o javascript(dããã) por trás, não que seja algo que implique muito no site mas, por que não cortar caminho e ir direto ao javascript?
Da pra ganhar muita produtividade hoje em dia usando snippets para javascript e os próprios autocomplete da IDE.

<h4>Posso fazer uma observação?</h4>
<img src="/assets/imgs/observacao.gif" alt=""><br><br>
Não estou dizendo que o jQuery é ruim, muito pelo contrário ele é <b>MUITO BOM</b> e já me ajudou muitas e muitas vezes, eu mesmo já criei plugin para o jQuery e incentivei pessoas a usar, o que eu estou falando é sobre o título do artigo, porque eu uso jQuery??

Eu recentemente me fiz essa pergunta e a resposta foi <b>animações</b>, tudo que eu fazia com o jQuery eu conseguia fazer com o javascript puro, menos as animações, na verdade até consigo, mas da muuuuito trabalho, só que hoje em dia eu não preciso tanto dessas animações, pô cara... <b>CSS3</b>, com as animações do CSS3 eu não preciso mais me prender tanto a um framework que eu usava praticamente pra fazer isso, eu posso deixar um estilo setado em um class e simplesmente adicionar o class no elemento que eu quero que seja animado, não tem muito segredo, daí pra frente comecei a deixar um pouco de lado o jQuery e usar mais javascript puro e me aprofundar mais em animações CSS e cara, eu só ganhei com isso, aprendi muita coisa tanto de javascript que se eu soube um dia eu tive que lembrar quanto de CSS.

Um ponto muito forte que o jQuery tem é o ajax, é muito melhor fazer uma requisição ajax com jQuery que já tem toda a estrutura de compatibilidade pronta do que fazer com o javascript, que é preciso verificar se o navegador tem suporte a tal objeto e tal tal tal.

Acredito que o jQuery seja um ótimo framework, porém precisamos pensar quando usar, ele não é o <b>default</b> do projeto, tem gente que ao começar um novo projeto já o inclui sem pensar no motivo, ele é um framework como todos os outros, ninguém sai incluido angular ou backbone em novos projetos sem pensar antes, é assim que deve ser.

<!-- Links -->