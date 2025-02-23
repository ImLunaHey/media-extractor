import {parse as parseHtml} from 'node-html-parser';
import ky from 'ky-universal';

const fetchMedia = async (url: string) => ky(url).text();

const isGifyLink = (url: string) => {
	if (!url) {
		return false;
	}

	return url.includes('giphy.com/gifs');
};

const isTenorLink = (url: string) => {
	if (!url) {
		return false;
	}

	return url.includes('tenor.com/view') || /tenor\.com\/[a-zA-Z0-9]+\.gif/.test(url);
};

const extractGify = (url: string) => {
	const mediaId = url.split('-').pop()?.replace(/\/*/, '');
	if (!mediaId) {
		return null;
	}

	return `https://media.giphy.com/media/${mediaId}/giphy.gif`;
};

const extractTenor = async (url: string) => {
	const body = await fetchMedia(url);
	const root = parseHtml(body);
	const gif = root.querySelector('div.Gif img');
	if (!gif) {
		return null;
	}

	return gif.attributes.src;
};

const removeUrlParams = (url: string) => {
	try {
		const _url = new URL(url);
		_url.search = '';
		return _url.toString();
	} catch {
		return url;
	}
};

export const resolveMediaUrl = async (url: string) => {
	const cleanUrl = removeUrlParams(url);

	// If it's a gify link, extract the media id and return the gify url
	if (isGifyLink(cleanUrl)) {
		return extractGify(cleanUrl);
	}

	// If it's a tenor link, extract the media id and return the tenor url
	if (isTenorLink(cleanUrl)) {
		return extractTenor(cleanUrl);
	}

	// If it's not a gify or tenor link, just return the url
	return cleanUrl;
};
