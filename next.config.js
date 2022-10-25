const nextTranslate = require('next-translate');
const headers = require('./headers');

module.exports = {
	reactStrictMode: true,
	...nextTranslate(),
	images: {
		domains: ['images.ctfassets.net'],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers,
			},
		];
	},
};
