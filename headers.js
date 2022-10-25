const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src reallifecontext.eu;
  style-src 'self' reallifecontext.eu;
  font-src 'self';  
`;

module.exports = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'Server',
		value: 'Apache', // phony server value
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'Referrer-Policy',
		value: 'same-origin',
	},
	{
		key: 'Permissions-Policy',
		value: 'geolocation=*', // allow specified policies here
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
];
