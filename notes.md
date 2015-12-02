# Ember

## 12/2/2015

- When updating ember, also update ember-data in bower.json AND package.json
- Default arguments to `ember s` can be stored in `.ember-cli` and overridden on
the command line
- `ember g --help` will list generators with additional info (also `ember g route --help`, etc)
- `application/route.js` handles the root path (`ember g route application`)
- Destructuring arguments in helper functions is more idiomatic in Ember
- ember truth-helpers includes a bunch of comparison helpers
- Prefer closure actions over bubbling
- Nesting routes is not like in rails. It's not about the URL or API, it's about what templates need to be displayed at the same time
  - Be more explicit with paths in router
- Components should be small isolated pieces of functionality, and comprise most of your application
