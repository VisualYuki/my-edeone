- [Редактирование Readme.md (Frontend, Backend)](#редактирование-readmemd-frontend-backend)
- [Для BACKEND разработчика](#для-backend-разработчика)
	- [from Backend for FrontEnd (Нужно заполнить)](#from-backend-for-frontend-нужно-заполнить)
	- [Frontend for Backend (Нужно сделать)](#frontend-for-backend-нужно-сделать)
- [Для FRONTEND разработчика](#для-frontend-разработчика)
	- [FrontEnd начало работы](#frontend-начало-работы)
	- [Плагины для VS Code](#плагины-для-vs-code)
		- [Pug lint](#pug-lint)
		- [Style lint](#style-lint)
		- [Eslint](#eslint)
		- [EditorConfig](#editorconfig)
		- [Prettier](#prettier)
	- [CSS сокращения](#css-сокращения)
	- [Gulp задачи](#gulp-задачи)
		- [Production mode (с оптимизицией)](#production-mode-с-оптимизицией)
		- [Development mode (без оптимизиции + source-maps)](#development-mode-без-оптимизиции--source-maps)
	- [Библиотеки](#библиотеки)
	- [Cтруктура проекта](#cтруктура-проекта)
	- [Особенности сайта](#особенности-сайта)
	- [Обратная связь с Frontend разработчиком](#обратная-связь-с-frontend-разработчиком)

# Редактирование Readme.md (Frontend, Backend)

-  Убедительная просьба следить за структурой и чистотой написанного вами текста.
-  Использовать markdown preview для отслеживания корректности вашего текста.

# Для BACKEND разработчика

## from Backend for FrontEnd (Нужно заполнить)

-  Есть ли локально сервер и где он лежит. Какой домен сайта в интернете на период натяжки и боевого развертывания.
   > Тут пишется ответ
-  Есть ли деплой, и как он работает.
   > Тут пишется ответ
-  Как проходит процесс от коммита изменений до появления изменений на сайте (домене, локальном сервере), т.е. что я должен сделать, чтобы правки были на сайте.
   > Тут пишется ответ
-  Структура папок и особенно где лежит весь html код сайта Т.е. для каждой страницы указать где лежит весь html, который используется на этой странице.
   > Пр. <br>
   > Основной шаблон - frontend\views\layouts\main.php и подключаемые файлы в frontend\views\layouts\main\
   > Части страниц - frontend\views\parts\
   > Главная страница - frontend\views\site\index.php и подключаемые файлы в frontend\views\site\index\
-  Где подгружаются скрипты, стили в php
   > Тут пишется ответ
-  Информацию для обратной связи.
   > Тут пишется ответ
-  Что должен знать Frontend разработчик со стороны Backend'a, чтобы начать делать свою работу. (Пр. Если я запушу изменения на гит, правки появятся на сайте? Что иначе нужно делать? )
   > Тут пишется ответ

## Frontend for Backend (Нужно сделать)

-  Файлы с исходниками обязательно должны лежать, либо на локальном сервере, либо на хостинге. т.е. вся ветка front должна быть неделима. т.к. брать только выходную папку (frontend-dist) не нужно, так как правки вносятся через исходники (src)
-  Если путь пр. /frontend-dist/css/... не устраивает, то во всех файлах (pug,html,css,js,favicons,...) заменить /front-end/ на /нужный-путь/frontend-dist, как минимум в yii2 такой путь работает сразу.
-  Убедительная просьба. Если идет только натяжка, то если что-то непонятно, то лучше написать мне и обсудить это, либо найти компромисс вместе, так как в будущем не хочется разбираться почему верстка работает не так, как должна.<br>
   Обратная связь: vk - https://vk.com/moshkin_denis, или telegram - @denis_moshkin
-  Когда вы переносите мою верстку из ветки front в master, то папку frontend-src коммитить не нужно, так как потом все изменения в гите будут показывать на вас. P.S. после натяжки я в любом случае буду делать правки и закомичу свои файлы.

# Для FRONTEND разработчика

## FrontEnd начало работы

-  Наличие установленной node.js, проверить в консоли `node -v` и `npm -v`
-  Установить зависимости `npm i`
-  Установить линтеры (раздел ниже для VS Code), либо установить плагины для вашей IDE.

## Плагины для VS Code

-  Открыть проект в папке, где находятся такие папки, как src, gulp, dist и т.д.

### Pug lint

-  Подключить плагин [puglint](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-puglint)

### Style lint

-  Подключить плагин [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Eslint

-  Подключить плагин [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### EditorConfig

-  Подключить плагин [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Prettier

-  Подключить плагин [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-  Установить опцию "prettier.useEditorConfig": true" в settings.json (для vs code)

## CSS сокращения

-  l (local) - локальные стили для блока выше.
-  b (bem) - бэм блок, которые повторяется больше одного раза.
-  d (display) - блок для мониторов.
-  m (mobile) - блок для мобилок.
-  t (tablet) - блок для планшета.

## Gulp задачи

### Production mode (с оптимизицией)

-  `npm run prod:serve` - запуск сервера (c минификацией и т.д.).
-  `npm run prod:build` - компиляция всего проекта, с удалением выходной папки + запуск сервера

### Development mode (без оптимизиции + source-maps)

-  `npm run dev:serve` - запуск сервера (без минификацией и т.д.).
-  `npm run dev:build` - компиляция всего проекта, с удалением выходной папки + запуск сервера

## Библиотеки

-  Модальные окна - fancybox (http://fancyapps.com/fancybox/3/docs) или bootstrap modal
-  Слайдер - slick-slider (https://kenwheeler.github.io/slick/) или boostrap slider
-  Шаблон ввода в input - jQuery Masked Input Plugin (https://github.com/digitalBush/jquery.maskedinput)
-  Выпадающий список - select2 (https://github.com/select2/select2)
-  Ленивая загрузки изображений - lazysizes (https://github.com/aFarkas/lazysizes)
-  Кастомный скролл - simplebar (https://github.com/Grsmto/simplebar)
-  Таймер - easytimer.js (https://github.com/albert-gonzalez/easytimer.js)
-

## Cтруктура проекта

-  .vscode - настройки для VS Code, если вы им пользуетесь.
-  dist - папка с выходными файлами, формируется только gulp'ом
   -  css - общий файл стилей для сайта.
   -  include-libs - либы, которые будут подключаться на отдельных страницах (.js,.css).
   -  include-scripts - скрипты, которые будут запускать либы выше.
   -  js - общий файл скриптов (подключается на каждой странице), а также скрипты для конкретных страниц.
   -  min-img - все картинки, прошедшие минификацию размера.
   -  pages - страницы html.
   -  svg - минифицированные svg иконки для подключения через ссылку.
   -  webp-img - изображения, конвертируемые в формат .webp
   -  favicons - фавиконы
   -  gifs - гифки
   -  fonts - шрифты
   -
-  gulp
   -  img - минификация и преобразования изображений.
   -  clean - удаление папки с выходными файлами.
   -  config - пути к файлам и переменные, которые используются в остальных gulp задачах.
   -  unused - папка с задачами, которые не используются.
   -  pug2html - компиляция всех страниц pug (при отслеживании: следит только за изменениями в папке страниц /pug/pages/\*\*)
   -  include_pug2html - компиляция нужной страницы и всех остальных папок в src/pug/\*\*, кроме src/pug/pages (при отслеживании: следит за одной страницей в папке /src/pug/pages/\_index.pug и за всеми остальными папками в src/pug/\*\*, кроме pages)
   -  serve - запуск задач, при изменении файлов.
   -  style - собрать общий бандл стилей (из src/scss в dist/css )
   -  copyToDist - перенести все внутренний папки в выходную папку (из /src/copyToDist в dist)
-  src - папка с исходниками проекта

   -  copyToDist
      -  favicons - фавиконы, манифесты, генерируемые сайтом: https://realfavicongenerator.net/
      -  fonts - часто используемые шрифты сайтов, генерируемые сайтом (подключаются выборочно): https://transfonter.org/
      -  gifts - гифки
      -  include-libs - либы, которые не идут в общий бандл сайта, а подключаются на нужных страницах
   -  img - изображения png, jpg, jpeg
   -  js
      -  common - скрипты, которые подключаются на всех страницах
      -  custom-plugins - кастомные скрипты (плагины)
      -  pages - страницы, за которыми следит webpack и идут в выходной файл по отдельности.
   -  pug
      -  include - то, что будет подключатся через include (breadcrumbs, menu ...)
      -  mixins - pug миксины
      -  page-layout - блоки подключаемые на каждой странице странице (footer,header,aside)
      -  pages - страницы, которые будут открываться в браузере
      -  page-template - шаблоны для страниц
   -  scss
      -  common - заготовки для сайтов
      -  include - стили для включения на отдельных страницах
      -  layout - header,footer,aside, ...
      -  libs - либы для общего файла стилей
      -  pages - стили для каждой страницы
      -  fonts - подключение различных шрифтов (используются выборочно и подключаются в site-main.scss)
      -  utils - стили переходящие из проекта в проект
      -  site-main.scss - файл, который подключает все нужные файлы стилей и он же и компилируется gulp задачей.
      -  new-styles.scss - файл стилей для нового верстальщика проекта, если лень искать нужный файл стилей.
   -  svg - svg иконки

-  webpack-config.js - собрать бандл скриптов.
-  temp - папка для временных файлов.
-  unused - папка для неиспользуемых файлов в данной конфигурации gulp.
-  tasks.md - задачи, которые мне нужно сделать в будущем.

## Особенности сайта

1.
2.

## Обратная связь с Frontend разработчиком

vk: https://vk.com/moshkin_denis <br>
telegram: @denis_moshkin
