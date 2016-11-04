---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Criando componentes apenas com css"
date:   2014-10-27
categories: css
---
Podemos deixar o javascript um pouco de lado na hora de criar alguns componentes como por exemplo um select customizado, existem vários plugins que fazem isso com javascript, mas por que não fazer apenas com css deixando o site mais performático e o código mais simples?

Existe uma técnica para isso, na verdade uma tag muito conhecida que podemos usa-la nesse caso, a tag <b>label</b>.

Com a label podemos usar o atributo <b>for</b> e um <b>input (checkbox ou radio)</b> para manipular os eventos das animações.

<img src="/assets/imgs/desconfiado.jpg" alt="">

<b>Exatamente</b>, podemos manipular os aventos de click usando um label, vou explicar melhor com um exemplo bem simples.

<b>HTML</b>
{% highlight html %}
<div class="content">
    <input type="checkbox" id="content-change-color" />
    <p>Aqui é o texto que trocará de cor.</p>
</div>
<label for="content-change-color">clique para trocar a cor do texto.</label>
{% endhighlight %}

<b>CSS</b>
{% highlight css %}
#content-change-color:checked + p{
    color: red;
}
{% endhighlight %}

Veja o exemplo funcionando abaixo.

<style>
#content-change-color:checked + p{
    color: red;
}  
</style>
<div class="wrapEdit">
    <div class="content">
        <input type="checkbox" id="content-change-color" />
        <p>Aqui é o texto que trocará de cor.</p>
    </div>
    <label for="content-change-color">clique aqui para trocar a cor do texto.</label>
</div>

Acredito que tenha ficado claro até aqui, para quem não conhece o seletor "+" do css ele é um <b>pattern</b> utilizado para encontrar elementos igual ao .next() do jQuery, ele pega o próximo irmão e coloca o estilo setado, com essa base já da pra entender como funciona mas vou explicar os passos.

Ao clicar na label ele da o check no input que tenha o mesmo id do seu atributo "for" ou no input que estiver dentro da própria label, no css colocamos um estilo pra quando o input estiver com o checked e usamos o "+" para estilizar o próximo elemento. 

Podemos ir muito além com outros seletores como por exemplo o "~" que faz uma busca não apenas no irmão mas em todos os irmão que forem interrompidos com outras tags por exemplo, ou mesmo o ">" que pega o primeiro filho.

Para quem quizer saber mais sobre seletores css veja esse [link][seletores].

É claro que esse exemplo é bem simples, vamos agora para um mais útil e completo como por exemplo um accordion.

<b>HTML</b>
{% highlight html %}
<div class="accordion">
    <label>
        <input type="radio" name="accordion-radio" />
        <strong>Título 1</strong>
        <div>Conteúdo 1</div>
    </label>
    <label>
        <input type="radio" name="accordion-radio" />
        <strong>Título 2</strong>
        <div>Conteúdo 2</div>
    </label>
    <label>
        <input type="radio" name="accordion-radio" />
        <strong>Título 3</strong>
        <div>Conteúdo 3</div>
    </label> 
</div>
{% endhighlight %}

<b>CSS</b>
{% highlight css %}
.accordion{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;  
}
  
    .accordion label{
      background: #f1f1f1;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      display: block;
      margin-top: 1px;
      position: relative;
    }
      .accordion strong{
        box-sizing: border-box;
        display: block;
        height: 34px;
        margin-top: 1px;
        padding: 7px;
        position: relative;
      }  
        .accordion strong:after{
          content: '';
          border: 7px solid transparent;
          border-top: 10px solid #282828;
          position: absolute;
          top: 12px;
          right: 15px; 
          
          -webkit-transition: all .3s ease-out;
          transition: all .3s ease-out;
        }  
        .accordion input{
          height: 34px;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }
        .accordion input:checked + strong:after{
          top: 4px;
          right: 15px;
          
          -ms-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        .accordion input:checked + strong + div{
          padding: 10px 20px;
          height: auto;
        }
      .accordion div{
        background: #fff;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        border-radius: 0 0 5px 5px;
        height: 0;
        padding: 0 20px;
        overflow: hidden;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
      }
{% endhighlight %}

Veja o exemplo funcionando abaixo.

<style>
.accordion{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;  
}
  
    .accordion label{
      background: #f1f1f1;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      display: block;
      margin-top: 1px;
      position: relative;
    }
      .accordion strong{
        box-sizing: border-box;
        display: block;
        height: 34px;
        margin-top: 1px;
        padding: 7px;
        position: relative;
      }  
        .accordion strong:after{
          content: '';
          border: 7px solid transparent;
          border-top: 10px solid #282828;
          position: absolute;
          top: 12px;
          right: 15px; 
          
          -webkit-transition: all .3s ease-out;
          transition: all .3s ease-out;
        }  
        .accordion input{
          height: 34px;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }
        .accordion input:checked + strong:after{
          top: 4px;
          right: 15px;
          
          -ms-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        .accordion input:checked + strong + div{
          padding: 10px 20px;
          height: auto;
        }
      .accordion div{
        background: #fff;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        border-radius: 0 0 5px 5px;
        height: 0;
        padding: 0 20px;
        overflow: hidden;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
      }
</style>
<div class="wrapEdit">
    <div class="accordion">
        <label>
            <input type="radio" name="accordion-radio" />
            <strong>Título 1</strong>
            <div>Conteúdo 1</div>
        </label>
        <label>
            <input type="radio" name="accordion-radio" />
            <strong>Título 2</strong>
            <div>Conteúdo 2</div>
        </label>
        <label>
            <input type="radio" name="accordion-radio" />
            <strong>Título 3</strong>
            <div>Conteúdo 3</div>
        </label> 
    </div>
</div>
<br>

É claro que esse código ficou maior, porém eu estilizei todo o accordion para mostrar uma interface bonita, mas vamos nos prender apenas a label e input, podemos trocar nosso input de <b>radio</b> para <b>checkbox</b> para podemos abrir mais de um ao mesmo tempo.

Como esse exemplo mais completo já da pra imaginar o quanto podemos fazer apenas com css não é?

Eu criei recentemente um snippet para sublime que faz exatamente isso, cria componentes com css puro inluíndo modal e carousel, segue o link caso tenham interesse [sublime onlycss snippets][onlyCss].


[seletores]: http://www.w3.org/TR/CSS2/selector.html
[onlyCss]: https://github.com/brunomarcel/sublime-onlycss-snippets