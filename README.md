# a6e 

For when you need to continuously edit a _single_ markdown file.

Like when, for instance, when you need to write the readme for a6e. Or any readme in general, for that matter.

Or you like to keep [track](https://github.com/reischapa/kv-ates) of useful things you learn or find.

### To understand (what this is):

This package is designed to do one thing: it watches a **single** markdown file
for changes, and creates a server in which it is possible to view a live HTML preview.

### To install:

```
# locally (good)
npm install a6e

# globally (better)
npm install --global a6e
```

### To run:

```
# after being installed globally

a6e <your markdown file path>

# for instance, to edit this readme, I issued:

a6e README.md
```

A web server will be spun up on `localhost:18100`. This project uses [livereload](https://www.npmjs.com/package/livereload),
and it starts the associated server, by default, on `localhost:43219`;

### To edit:

After starting `a6e`, just edit your file, and the changes will be (almost) instantaneously reflected on the live preview!

### To configure:

This project uses [rc](https://www.npmjs.com/package/rc) as a configuration
backend, with an associated filename of `.a6erc`.

The available configuration options at this point are:

  * `port`: the port to which the server will bind to (default `18100`);
  * `reloadPort`: the port to which the reload server will bind to (default `43219`);
  * `stylePath`: the path of your own `index.css` file that you may wish to create in order to override the default page style (defaults to the [internal styles file](res/index.css));
  * `watchedPath`: the path of the markdown file you wish to watch (required: will be set by the last command parameter (`process.argv[process.argv.length - 1]`), if not passed);
  * `generatePageContent`: a boolean that, if set to true, causes a6e to only output the resulting HTML page to stdout once, and then exit. Useful for generating a page that can be served statically. (default `false`);
  
### To test:

`TODO implement this`


