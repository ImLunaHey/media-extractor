# media-extractor

Find the hidden media URLs that image sites like Tenor or Giphy hide inside their html.

---

\- `https://tenor.com/NCEt.gif` Is that a .jif file?

\- Haha no, it's obviously a .gif file

Actually... it's an html file. Yes, have fun saving that in a database and trying to figure out why your images don't load.

## Usage

`npm install media-extractor`

```js
import { resolve } from 'media-extractor';

const url = await resolveMediaUrl('https://tenor.com/view/holo-spice-and-wolf-anime-cartoon-japanese-gif-9404303');

console.log(response);
  // https://media1.tenor.com/images/326f7e77b5562ce6c9aa90ed77799017/tenor.gif
```

These links can be generated without an http request:

- `giphy.com/gifs`

These links **cannot** be generated without an http request:

- `tenor.com/view`
- `tenor.com/*.gif`


### Contributing
Please make sure to add tests for each new endpoint to make sure they're supported.

You can run the tests with `npm run test`
