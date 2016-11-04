---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Criando e enviando Snippets para o install package do Sublime"
date:   2014-10-07
categories: Sublime/tutorial
---
<b>Hoja vamos aprender como criar um snippets para o sublime e enviar para o install package.</b>

Primeiro, o que é snippet?

Snippets é aquilo que você pode já ter usado e não sabe, como por exemplo quem usa no Dreamweaver, muitas vezes você começa a escrever um certo código e ele te da uma opção de autocomplete, mas não aquele autocomplete da palavra, e sim de um bloco de código, então, snippets são blocos de códigos prontos para serem usados, agilizando suas tarefas, evitando refações e componetizando o projeto.

Eu mesmo já vi e participei de uns projetos onde haviam o mesmo componente em varias partes do projeto, quando fomos alterar um o outro continuou com o mesmo estilo, quando fomos ver eles tinham sido feito totalmente diferente, não que os snippets sejam a solução disso, talvez só uma organização melhor dos envolvidos no projeto já ajude, mas os snippets podem sim ajudar na organização e também na agilidade, então vamos ver como criar um.

Primeiro no Sublime vá ate o menu <b>Tools > New Snippet...</b>, isso vai criar um arquivo assim:

{% highlight html %}
<snippet>
	<content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<!-- <tabTrigger>hello</tabTrigger> -->
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<!-- <scope>source.python</scope> -->
</snippet>

{% endhighlight %}

Agora vamos altera-lo para criar um formulário de envio de e-mail simples.

{% highlight html %}
<snippet>
    <content><![CDATA[<!-- Meu Snippet -->
<form action="${1:action}" method="${2:POST/GET}" id="snippetFormMail">
	<label for="${3:for}">Nome:</label>
	<input type="text" name="nome" id="${3:id}" >
	
	<label for="${4:for}">E-mail:</label>
	<input type="text" name="mail" id="${4:id}" >

	<label for="${5:for}">Nome:</label>
	<textarea name="assunto" id="${5:id}" cols="30" rows="10"></textarea>

	<input type="submit" id="enviar" value="enviar">
</form>
	]]></content>
    <tabTrigger>form-email</tabTrigger>
    <description>Formulario de email</description>
    <scope>text.html</scope>
</snippet>
{% endhighlight %}

Note que toda minha estrutura fica dentro da tag <b>content</b> e não podemos apagar o <b>CDATA</b>, dentro do content em alguns lugares temos esses códigos <b>${1:action}, ${2:POST/GET}...</b> esse código serve para que quando criar o seu snippet o cursor vá diretamente para o que tenha o numero 1 ou o menor número, o texto a frente do número será o placeholder, e apertando o tab, o cursor vai para o próximo número automaticamente.

A tag <b>tabTrigger</b> é o seu atalho para o snippet, <b>description</b> é a descrição do seu snippet e <b>scope</b> é o tipo do arquivo em que seu snippet vai funcionar, não é a extensão do arquivo que conta e sim a sintaxe definida pelo editor, para alterar a sintaxe aperte <b>Ctrl + Shift + p</b> e digite a sintaxe desejada, nesse caso html.

Cada extensão tem o seu <b>scope</b> diferente, por exemplo no html usamos o <b>text.html</b>, já no css usamos o <b>source.css</b>, javascript <b>source.js</b> e assim vai.

Depois de tudo feito salve o arquivo com essa extensão <b>.sublime-snippet</b>, se ele foi criado pelo menu <b>Tools > New Snippet...</b> o caminho da pasta já esta certo, é só salvar.

<b>Vamos testar.</b>

<img src="/assets/imgs/form-mail.gif" height="473" width="713" alt="">

Legal funciona, agora vamos supor que queremos deixar esse snippet publico para qualquer um usar no Sublime.

Verifique se já existe um snippet com o mesmo propósito que o seu aqui [Search page][Search page].

Escolha o nome do seu snippet, o ideal é que na busca anterior já verifique se o nome escolhido já esta em uso, use CamelCase ou underscore para nomes compostos por exemplo <i>NomeDoMeuSnippet Autocomplete</i> ou <i>Nome_do_meu_snippet Autocomplete</i>.

Escolha onde vai hospedar seu código, [GitHub][GitHub] ou [BitBucket][BitBucket], nesse exemplo vou usar o GitHub.

Faça um [fork][fork] do Package Control Channel. <br>
Na pasta <b>repository</b> existem vários arquivos com uma organização alfabética, de acordo com o nome do seu snippet abra o arquivo correspondente e adiciona a seguinte estrutura.

{% highlight js %}
{
	"name": "Alignment",
	"details": "https://github.com/wbond/sublime_alignment",
	"releases": [
		{
			"sublime_text": "*",
			"details": "https://github.com/wbond/sublime_alignment/tags"
		}
	]
}
{% endhighlight %}

Substitua as informações com as do seu snippet.
Em details você terá que colocar a url do seu repositório, lembre de deixar bem específico do que se trata esse snippet, um framework, uma biblioteca ou qualquer outra coisa, e também como e para que funciona.

Em releases > details coloque o caminho da release do seu snippet, se subir sem, eles vão pedir, então já faça.

Tendo certeza que colocou o seu código em ordem alfabética envie um pull request e espere o retorno. ;D

<!-- Links -->
[Search page]: https://sublime.wbond.net/search
[fork]: https://github.com/wbond/package_control_channel
[GitHub]: https://github.com/
[BitBucket]: https://bitbucket.org/