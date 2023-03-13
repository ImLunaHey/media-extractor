import { resolveMediaUrl } from '../src/index';

describe('Tenor', function () {
  it('tenor.com/*.gif', async () => {
    const url = await resolveMediaUrl("https://tenor.com/YpQf.gif");
    expect(url).toEqual("https://media.tenor.com/Gc-Cc2Q1tP8AAAAC/squidward-squidward-tentacles.gif");
  });

  it('tenor.com/view/*', async () => {
    const url = await resolveMediaUrl("https://tenor.com/view/ahagon-new-game-umiko-gif-13247685");
    expect(url).toEqual("https://media.tenor.com/4aBGKXpAzygAAAAC/ahagon-new-game.gif");
  });
});
