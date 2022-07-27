# Guide to getting started

#### Installing, customizing and making use of ChartEngine

___

### » Installation

#### Perquisites

ChartEngine is an extension of FrontEngine. Therefore, you need to have FrontEngine installed and configured.
Go to the [FrontEngine](https://www.pexlab.net/projects/front-engine) project and follow the instructions to install and configure it first.

<br>

#### 1. Adding the package

ChartEngine is distributed by the [npm Registry](https://www.npmjs.com/). In order to install the package and
automatically add it to your ```package.json``` run either of the following:

```shell
# if you're using the npm CLI
npm install @pexlab/ngx-chart-engine

# if you're using the Yarn CLI
yarn add @pexlab/ngx-chart-engine
```

<br>

#### 2. Making the assets available

Go to the root of your project and open the ``angular.json`` file. In there go ahead and find the ``assets``
and ``styles`` section and append the following:

```diff
"assets": [
  "src/favicon.ico",
  "src/assets",
+ {
+   "glob": "**/*",
+   "input": "./node_modules/@pexlab/ngx-chart-engine/assets/",
+   "output": "/assets/"
+ }
]
```