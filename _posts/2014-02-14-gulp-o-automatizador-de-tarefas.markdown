---
author: Bruno Marcel
twitter: brunomarcel_
layout: post
title:  "Gulp o automatizador de tarefas"
date:   2014-02-14
categories: css/ux
---
Hoje o Front-End tem varias formas de trabalhar como organizar suas ferramentas, criar o pacote de deploy e assim vai, eu tenho utilizado recentemente um automatizador de tarefas que vou apresentar pra vocês, o [Gulpjs][Gulpjs].

O Gulpjs é uma ferramenta que te ajuda na hora de organizar as suas tarefas, te poupando tempo e ferramentas adicionais, com ele você pode por exemplo, compilar um arquivo pré-processado, minificar arquivos, renomear arquivos, comprimir imagens, fazer um deploy entre outras tarefas(já existem mais de 200 plugins no site).

Um exemplo simples de como eu trabalhava antes de usar o Gulpjs é o seguinte, eu usava o SASS que dependia do ruby para ser compilado e gerar o meu css, usava ferramentas online para minificar o meu js ou alguma outra ferramenta adicional, utilizava um arquivo .bat para subir os meus arquivos no servidor local a cada ctrl+s do sublime (isso gerava um problema horrível pois muitas vezes o .bat enviava os arquivos para o servidor antes do SASS gerar o meu css) fora todo o trabalho do deploy, foi ai que comecei a pesquisar e colocar em prática ferramentas de automação, eu já conhecia o [Gruntjs][Gruntjs] que vi o [Rafael Lyra][rafael] falando a respeito no [DevCast][DevCast] mas nunca usei, e pesquisando eu encontrei o Gulpjs, vi que era o que eu precisava e que além de tudo, era muito fácil de usar.

<b>Instalando e usando</b>

Para usa-lo você tem a única dependência do Nodejs, então se não tiver e quiser começar a usar, [instale][node].
Feito isso você vai instalar o Gulpjs pelo seu terminal do Nodejs.

{% highlight js %}
npm install -g gulp
{% endhighlight %}

Depois de tudo instalado crie na pasta do gulp um arquivo chamado gulpfile.js, é ele quem faz toda a mágica.

Aqui está um exemplo de gulpfile.js onde utilizei os plugins [gulp-stylus][stylus], [gulp-jade][jade] e [gulp-imagemin][imagemin] que podem ser encontrados no [gulpjs.com/plugins][plugins].

{% highlight js %}
var
gulp     = require('gulp'),
stylus   = require('gulp-stylus'),
jade     = require('gulp-jade'),
imagemin = require('gulp-imagemin'),
path = {
	css  : 'build/css/',
	html : 'build/',
	img  : 'build/img/'
},
watchPath = {
	styl  : 'styl/',
	jade  : 'jade/',
	img   : 'img/'
}

gulp.task('stylus', function(){
	return gulp.src('styl/*')
		.pipe(stylus())
		.pipe(gulp.dest(path.css));
});

gulp.task('jade', function(){
	return gulp.src('jade/*')
		.pipe(jade())
		.pipe(gulp.dest(path.html));
	});

gulp.task('img', function(){
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest(path.img));
});

gulp.task('watch', function(){
	gulp.watch(watchPath.styl, ['stylus']);
  	gulp.watch(watchPath.jade, ['jade']);
  	gulp.watch(watchPath.img, ['img']);
});

gulp.task('default', ['stylus', 'jade', 'img', 'watch']);
{% endhighlight %}

Esse é um exemplo bem simples porém útil, o que fizemos foi o seguinte. <br>
Nas primeiras linhas declaramos as variáveis dos plugins e as pastas que vamos usar, em seguida começamos a criar nossas tasks onde segue esse formato:

{% highlight js %}
gulp.task('nome_da_task', function(){
	return gulp.src('pasta_dos_arquivos')
		.pipe(variavel_do_plugin())
		.pipe(outra_variavel_do_plugin()) //pode usar quantas quiser de acordo com sua necessidade
		.pipe(gulp.dest(pasta_de_destino));
});
{% endhighlight %}

Declaramos depois a task “watch”, essa que percebe a cada modificação nos arquivos citados e chama a task para execução da tarefa, e por final a task “default” que inicializa tudo.

Para iniciar o gulp basta ir ate a raiz do documento gulpfile.js pelo terminal do node e digitar o comando

{% highlight js %}
gulp
{% endhighlight %}

Esse é o comando que inicia a task “default”.

Para iniciar tasks únicas digite o comando

{% highlight js %}
gulp nome_da_task
{% endhighlight %}

Eu criei um template pronto para o usar o Gulp que já vem com varias configurações e estruturas de pastas, aqui esta o link para quem quiser usar ou até contribuir [HTML5 fruit salad][hfs].

[Gulpjs]: http://gulpjs.com/
[Gruntjs]: http://gruntjs.com/
[rafael]: http://www.rafaellyra.com/
[DevCast]: http://devcastbrasil.com/
[node]: http://nodejs.org/
[stylus]: https://www.npmjs.org/package/gulp-stylus/
[jade]: https://www.npmjs.org/package/gulp-jade/
[imagemin]: https://www.npmjs.org/package/gulp-imagemin/
[plugins]: http://gulpjs.com/plugins/
[hfs]: https://github.com/brunomarcel/html5-fruitsalad