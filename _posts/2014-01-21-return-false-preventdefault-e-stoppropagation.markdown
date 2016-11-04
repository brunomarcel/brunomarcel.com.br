---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "return false, preventDefault() e stopPropagation()"
date:   2014-01-21
categories: javascript
---
Muitas pessoas usam <b>return false;</b> e <b>e.preventDefault()</b> mas não sabem para que servem, usam por instinto mesmo, sendo assim, como escolher qual usar?

O <b>e.preventDefault()</b> é mais usado no elemento “a” para cancelar o direcionamento do link, alguns devs ainda usam o “javascript:;” dentro do atributo “href”, eu não acho isso uma boa prática, não o recomendo.

Além disso o  <b>e.preventDefault()</b> mantém o que chamam de borbulhamento , que na verdade é “propagar o evento dos elementos com nível hierárquico maior”, ou seja, ele herda os eventos e dispara ao terminar os seus próprios. Para que não sejam disparados esses eventos herdados usamos o <b>e.stopPropagation()</b>.

Ao usar o return false; você dispara os 2 eventos acima citados sem perceber, sendo assim o <b>return: false;</b> cancela o direcionamento do link, o borbulhamento e todo o código que estiver depois dele.

Aqui um exemplo na prática:

Temos o seguinte html:

{% highlight html %}
<h1>Clique nos "spans".</h1>
<a href="#">

  <span id="preventDefault">com e.preventDefault()</span>

  <span id="stopPropagation">com e.stopPropagation()</span>

  <span id="returnFalse">com return false</span>
</a>
{% endhighlight %}

E o seguinte javascript:

{% highlight js %}
$('a').click(function(){
  alert('Você clicou no link');
});

$('#preventDefault').click(function(e){
  e.preventDefault();
  alert('Você clicou no span com e.preventDefault()');
});

$('#stopPropagation').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  alert('Você clicou no span com e.stopPropagation()');
});

$('#returnFalse').click(function(e){
  alert('Você clicou no span com return false');
  return false;

  alert('esse alert nunca será disparado.');
});
{% endhighlight %}

Note que ao clicarmos no span com id=”preventDefault”, ao terminar seu bloco de código o evento do pai dele será disparado, já no span com id=”stopPropagation” o evento do pai não será disparado assim como no span com id=”returnFalse”, porém ele não dispara o último alert() que esta depois do return false;.


[Veja um exemplo funcionando.][codepen]

[codepen]: http://codepen.io/brunomarcel/pen/csAFn