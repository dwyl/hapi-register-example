# `hapi-register` *example*

[![Build Status](https://travis-ci.org/nelsonic/hapi-register-example.svg)](https://travis-ci.org/nelsonic/hapi-register-example)
[![codecov.io](http://codecov.io/github/nelsonic/hapi-register-example/coverage.svg?branch=master)](http://codecov.io/github/nelsonic/hapi-register-example?branch=master)
[![Code Climate](https://codeclimate.com/github/nelsonic/hapi-register-example/badges/gpa.svg)](https://codeclimate.com/github/nelsonic/hapi-register-example)
[![Dependency Status](https://david-dm.org/nelsonic/hapi-register-example.svg)](https://david-dm.org/nelsonic/hapi-register-example)


This repo is a showcase for how to use the
[**hapi-register**](https://github.com/nelsonic/hapi-register) plugin
for a simple (*yet complete*) web/app registration process.

## Try it: https://hapi-reg.herokuapp.com/

![register form](https://cloud.githubusercontent.com/assets/194400/10197712/d6cc0348-6790-11e5-86ca-dc218bdffd54.png)

To run this example *locally*, simply:

#### 1. Clone the repo:

```sh
git clone git@github.com:nelsonic/hapi-register-example.git
```
#### 2. Install *Dependencies* from NPM

```sh
npm install
```

#### 3. Run the Server

```sh
npm start
```

That's it.  
Now, hack to heart's content!


When we submit the form without any of the required fields we see:

![register-1of4](https://cloud.githubusercontent.com/assets/194400/10266518/ce0c2ba6-6a61-11e5-89bc-4abf33b30f21.png)

![register-3of4](https://cloud.githubusercontent.com/assets/194400/10266523/680d1922-6a62-11e5-9533-3560a646dfd0.png)

We also use https://github.com/chriso/validator.js
to mitigate [Cross Site Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
vulnerability:

Avoids Cross Site Scripting:
![register-hack-1of2](https://cloud.githubusercontent.com/assets/194400/10267320/5dd3bad6-6a87-11e5-888b-f1e1dbbf9f39.png)

Displays welcome message on successful registration:
![reg-success-1of2](https://cloud.githubusercontent.com/assets/194400/10267355/c7d8a31e-6a88-11e5-8bf9-3bb148e2d870.png)
