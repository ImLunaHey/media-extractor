import { resolveMediaUrl } from '../src/index';

describe('resolveMediaUrl', function () {
  it('returns non-URLs as is', async () => {
    const url = await resolveMediaUrl('This is not a url');
    expect(url).toEqual('This is not a url');
  });

  it('returns URLs that are already media URLs', async () => {
    const url = await resolveMediaUrl('https://media.giphy.com/media/qxMuoLzyR3qi4/giphy.gif');
    expect(url).toEqual('https://media.giphy.com/media/qxMuoLzyR3qi4/giphy.gif');
  });

  it('returns URls that aren\'t from gify or tenor as is', async () => {
    const url = await resolveMediaUrl('https://www.google.com');
    expect(url).toEqual('https://www.google.com/');
  });
});
