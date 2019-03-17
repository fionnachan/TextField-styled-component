# Building Instructions
## Package installation
```bash
$ npm install
or
$ yarn
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since the webpack cli command is registerd in `package.json` in this project, just type the following command to run webpack-dev-server:

```bash
$ npm start
or
$ yarn start
```

## Build assets
To put compiled files into `dist` directory, type the following command.

```bash
$ npm run build
or
$ yarn build
```
