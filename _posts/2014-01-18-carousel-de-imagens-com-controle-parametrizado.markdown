---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Carousel de imagens com controle parametrizado"
date:   2014-01-18
categories: javascript
---
Muitas e muitas vezes eu precisei de um plugin para carousel de imagens, e muitos dos plugins resolveram o meu problema, porém, o último que precisei era para um site responsivo com 5 resoluções diferentes mais a orientação da tela, testei alguns plugins e nenhum trabalhava como eu precisava, decidi então criar o meu, mesmo sabendo que já existem muitos.

Comecei separando o que eu precisava:

<ul>
	<li>Quantidade de imagens visíveis</li>
	<li>Espaçamento entre as imagens</li>
	<li>Quantidade de imagem a ser animada por vez</li>
	<li>liberdade para colocar imagem ou texto nas setas do carousel</li>
	<li>Mais de um carousel funcionando na mesma página</li>
	<li>E um evento de “reload” para refazer todos os parâmetros assim que necessário</li>
</ul>

Depois disso foi só codificar, aqui vai um passo a passo do plugin( é bem fácil de usar ).

Primeiro vamos incluir o script.

{% highlight html %}
...
<script type="text/javascript" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="libs/bmcarousel.min.js"></script>
</body>
{% endhighlight %}

Seu html vai seguir a estrutura básica de uma “ul” com um class.

{% highlight html %}
<ul class="ulCarousel">
    <li><img src="imgs/img-1.jpg" /></li>
    <li><img src="imgs/img-2.jpg" /></li>
    <li><img src="imgs/img-3.jpg" /></li>
    <li><img src="imgs/img-4.jpg" /></li>
    <li><img src="imgs/img-5.jpg" /></li>
    <li><img src="imgs/img-6.jpg" /></li>
    <li><img src="imgs/img-7.jpg" /></li>
</ul>
{% endhighlight %}

Para o css o essencial é esse código.

{% highlight css %}
.ulCarousel > li{
    float: left; /* ou display: inline; */
    list-style: none;
    display: none
}
{% endhighlight %}

OBS: Esse css é apenas para o carousel funcionar, o estilo em si é você que vai criar.

E por último a chamada do plugin.

{% highlight js %}
$(function(){
    bmcarousel.start({
        container   : $('.ulCarousel'),     
        visible     : 2,                   
        space       : 10,                  
        left        : 'prev',              
        right       : 'next',              
        qtdScroll   : 1                    
    });
})
{% endhighlight %}

Esse parâmetros são os controles do carousel onde:

<ul>
	<li>container é o seletor do carousel</li>
	<li>visible é a quantidade de imagens visíveis na tela</li>
	<li>space é o espaço entre as imagens (margin: x)</li>
	<li>left/right são as setas onde você pode colocar tanto um texto quanto uma tag “img”</li>
	<li>qtdScroll é a quantidade de imagem a ser animada por vez</li>
</ul>

Acesse a página do [github][github] para ver o evento reload, uso de mais de um carousel na mesma página e para contribui se quiser.

[github]: https://github.com/brunomarcel/bmcarousel