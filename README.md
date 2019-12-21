# 起動までの操作

- リポジトリをクローン

- npm install --save express @types/express body-parser @types/body-parser @types/compression

- npm install --save-dev npm-run-all nodemon

- npm install --save mongoose @types/mongoose



# 起動時の操作

- docker-compose up -d でコンテナを実行させる

- npm start



# 終了時の操作

- ctrl-Cで終了

- docker-dompose stopでコンテナを終了させる



## 構成

- dbのみdocker-composeで構築している為、npm start前にdocker-composeを実行する必要がある

- 同様に終了時にはコンテナも終了させる



# 参考（というか摸倣）したサイト

https://qiita.com/baster/items/5b6a2e49030067b6e55c

ど素人にもわかりやすく、かつDBはコンテナ化したいなぁという要望にドンピシャでした。
有益な情報に感謝。





# AngularSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
