---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "O que é Phantomjs?"
date:   2014-02-22
categories: javascript
---
Phantomjs é um navegador não visual baseado no webkit.

Navegador não visual?

Sim, ele é um navegador que roda no terminal e traz com ele a API do javascript onde é possível realizar testes funcionais e unitários com uso de alguns plugins como o Casperjs por exemplo, além de ter suporte a manipulação de DOM, Ajax, SVG, Canvas, JSON e os seletores CSS.

<b>Para que serve o Phantomjs?</b>

Vamos pensar que trabalhamos em um projeto onde atuam 10 programadores, e vamos pensar que eles programaram sem testes e no meio do projeto surgiu uma funcionalidade nova, independente do código estar bem estruturado ou não, corre o risco de qualquer ajuste por menor que seja, alterar algo que não se espera, no caso outra funcionalidade, e isso não é legal.

Os testes servem para isso, quando houver qualquer alteração no código, você roda o seu teste e ele te informa se ocorreram erros ou não, se afetou outra funcionalidade, lembrando que, quando você começa a programar usando testes, você começa a estruturar melhor o código e passa a pensar melhor também, partindo do principio que, primeiro você faz todos os testes e depois você começa a programar o seu código, funciona assim:

<ul>
	<li>Escreve os testes</li>
	<li>Roda os testes e espera o retorno das falhas previstas</li>
	<li>Começa a programação</li>
	<li>Roda novamente os testes e espera o retorno de sucesso</li>
</ul>

É claro que com o crescimento do projeto, provavelmente teremos que ajustar os nossos testes, talvez com novas regras e novos comportamentos.

<b>Ta, mais o que testar?</b>

Os testes dependem muito do que é priorizado no projeto, não tem como decidir quais serão os testes sem ter o escopo do projeto em mãos( ou em tela rs ), mais é bom saber que temos o controle total de um navegador qualquer, como por exemplo navegar entre os links e ver qual o seu retorno, verificar a existência de seletores para comportamentos futuros, fazer testes com logins, fazer teste de requisições Ajax, como eu disse antes, temos o controle do DOM basta saber a nossa necessidade.