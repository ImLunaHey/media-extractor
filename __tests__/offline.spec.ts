import { resolveMediaUrl } from '../src/index';

describe('Giphy', function () {
  it('giphy.com/gifs/*', async () => {
    const url = await resolveMediaUrl("https://giphy.com/gifs/spice-qxMuoLzyR3qi4");
    expect(url).toEqual("https://media.giphy.com/media/qxMuoLzyR3qi4/giphy.gif");
  });
});
