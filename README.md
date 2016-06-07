# react-sandbox

## Hello

We’re using [React](https://facebook.github.io/react/)
a fair bit these days here at Little Weaver. React has a lot of surrounding
ecosystem (ES6, Babel, webpack, ImmutableJS, redux, JSX, etc…). Not all of this
is necessary to use React. At its core, React is simply a library for user
interfaces. It’s the “View” in Model View Controller (more or less). However, a
lot of React tutorials use a lot of these surrounding tools. They can be tricky
to setup. So instead, here’s a repo to get started with. At Little Weaver we
like to use React with ES6 (ECMAScript 2015/newer version of JavaScript).
Unfortunately, not every browser supports all the ES6 features. As such, we
have to “transpile” ES6 features into features that older browsers support.
This is accomplished with `babel` and `webpack`. But you don’t need to worry
about that here if I’ve done my job correctly.

## npm and node

`node` is a JavaScript runtime that lives outside of the browser. The build
tools in this repo use `node`, so we need it installed alongside `npm`. `npm`
is a package manager for `node` JS packages — akin to `pip` in the Python world.

### Windows

Use [nvm-windows](https://github.com/coreybutler/nvm-windows). Install the
latest stable version of `node` with `nvm install latest`. This will come with
`npm`.

### OS X/Linux

Use [nvm](https://github.com/creationix/nvm). Install the latest stable version
of `node` with `nvm install latest`. This will come with `npm`.

### All Operating Systems

Ping [Emily](https://github.com/emilyhorsman) if something goes wrong.

## Installation

1. `git clone git@github.com:littleweaver/react-sandbox.git`
2. `cd react-sandbox`
3. `npm install`

## Running

`npm run start`

Open `http://localhost:8080` in your browser!
