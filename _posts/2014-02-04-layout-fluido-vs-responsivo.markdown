---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Layout Fluído Vs Responsivo"
date:   2014-02-04
categories: css/ux
---
Muitas pessoas confundem os layout fluídos com os responsivos, pensam que tudo que é responsivo apenas estica e diminui, mas não é bem assim.

Os <b>layouts responsivos</b> são aqueles que precisam ter uma atenção maior da área de UX, quando é analisada toda a usabilidade do site, contemplando todos os dispositivos e se possível partindo do princípio “mobile first”, onde toda a arquitetura começa sendo pensada a partir do menor dispositivo utilizável seguindo em ordem crescente e adequando as informações.<br>
O layout não segue a mesma estrutura em todos os dispositivos, muitos trocam as informações de lugar para melhor visualização, as vezes escondem e mostram a partir de um click, mudam os tamanhos das fontes, ícones e qualquer outro elemento.<br>
Para esse tipo de desenvolvimento são utilizadas as media queries css e algumas libs como [bootstrap][bootstrap] e [groundwork][groundwork], eu custumo usar o [LazyLoad][LazyLoad] para carregamento de script async sendo que muitas vezes temos scripts particulares pra cada dispositivo.<br>
Nesse mesmo link do groundwork tem um bom exemplo de como funciona um layout responsivo, ele tem um menu que mostra o site de varias formas diferentes, muito interessante.

Os <b>layouts fluídos</b> são aqueles que acompanham o tamanho da tela, apenas aumentando e diminuindo, não trocando estrutura e não pensando muito na usabilidade, vamos pensar em acessar um site em uma tv de 50″ e acessar o mesmo site em um celular onde esse site é visto da mesma forma pelos 2 dispositivos, é claro que ficará horrível em um dos casos se não nos dois, para construir esse tipo de layout não se pensa muito em “px” e sim em “%”, para que o elemento se estique de acordo com o pai tendo assim a sua “fluidez”, aqui tem um exemplo simples de como ele funciona [960.gs][960].<br>

Temos também os <b>layouts fluídos híbridos</b> onde seguem o mesmo padrão dos fluídos, porém com uma limitação de largura, nesse caso utilizamos o “max-width” e “min-width” assim conseguimos ter certo controle do layout.

Visto os 2 exemplos e todas as suas particularidades, já da pra ter noção de como e quando usar cada tipo de layout.

[bootstrap]: http://getbootstrap.com
[groundwork]: http://groundworkcss.github.io/groundwork/?url=docs/home
[LazyLoad]: https://github.com/rgrove/lazyload/
[960]: http://grids.heroku.com/fluid_grid?column_amount=12