# node-daytime-server

Daytime protocol server implementation in node.js.

## Prerequisites

To run this software you must have [node.js](http://nodejs.org) installed.

## Installation

Use these commands to install this software.

```sh
git clone https://github.com/hdjarv/node-daytime-server.git
cd node-daytime-server/
npm install
```

## Running

Use this command (in the `node-daytime-server` folder) to run this software.

```sh
npm start
```

By default, the server uses port `13`. That usually requires administrative privileges for the user to use. 
To change port set the `PORT` environment variable when starting the server.

```sh
PORT=1313 npm start
```

The server's output format is customizable by settings the `FORMAT` environment variable to a string supported by the [momentjs](http://momentjs.com/docs/#/displaying/format/) library. The default format is `YYYY-MM-DD HH:mm:ss Z`.

```sh
FORMAT="DD/MM/YYYY" npm start
```


## Using

This software implements the daytime protocol as specified by [RFC 867](https://tools.ietf.org/html/rfc867). This software supports TCP connections only.


### Example usage

Here is an example (for Unix-like operating systems using netcat) on how to use this software.

```sh
nc localhost 13
```

## License

This software is licensed under the MIT license, see file LICENSE.
