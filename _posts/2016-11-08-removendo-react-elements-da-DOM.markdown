---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Removendo React Elements da DOM"
date:   2016-11-08
categories: javascript/React
---
Esses dias eu precisei criar um modal em um projeto com [React], e ele era aberto com o click de um button, o problema é que eu tinha que usar um modal padrão da empresa, e sempre que eu clicava no botão de fechar, ele destruia todo o elemento, não era apenas um "display: none", então toda hora de abrir o modal eu tinha que usar o seguinte código para recriar o elemento react:

{% highlight js %}
React.render( React.createElement(Modal), document.getElementById('modal') );
{% endhighlight %}

Ai que ta o problema!

Todo elemento criado pelo React ganha um 'data-reactid' que serve de referência para quando precisar mudar algo desse componente,
e quando você apenas remove o elemento:

{% highlight js %}
document.getElementById('modal').remove();
{% endhighlight %}

O elemento não existe mais na tela, porém o react ainda mantém ele na memória, e todo this.trigger(data) disparado pela store continua procurando os elementos destruidos.
OBS: O projeto usava o [Reflux].

No meu caso eu coloquei um console.log('blá'); no componente, e cada vez que eu fechava e abria o modal, ele printava um 'blá' a mais, ou seja, a store enviava os dados para cada modal que eu ja tinha fechado.

A solução foi criar um eventListener do botão de fechar o modal e executar o seguinte código.

{% highlight js %}
React.unmountComponentAtNode(document.getElementById('modal'));
{% endhighlight %}

Esse código limpa a memória do react, dessa forma é possível remover e criar o componente quantas vezes quiser!

[React]: https://facebook.github.io/react/
[Reflux]: https://github.com/reflux/refluxjs
