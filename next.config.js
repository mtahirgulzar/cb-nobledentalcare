/** @type {import('next').NextConfig} */
const paths = [
	{ path: 'all-on-4-and-all-on-6', des: 'our-services' },
	{ path: 'bone-grafting-sinus-lifting', des: 'our-services' },
	{ path: 'composite-fillings', des: 'our-services' },
	{ path: 'cosmetic-dentistry', des: 'our-services' },
	{ path: 'crown-and-bridges', des: 'our-services' },
	{ path: 'dental-cleaning', des: 'our-services' },
	{ path: 'dentistry-for-children', des: 'our-services' },
	{ path: 'endodontics', des: 'our-services' },
	{ path: 'fixed-bridges', des: 'our-services' },
	{ path: 'full-partial-dentures', des: 'our-services' },
	{ path: 'general-dentistry', des: 'our-services' },
	{ path: 'implant-dentistry', des: 'our-services' },
	{ path: 'implant-supported-bridges-and-dentures-1', des: 'our-services' },
	{ path: 'nitrous-oxide-sedation', des: 'our-services' },
	{ path: 'orthodontics', des: 'our-services' },
	{ path: 'other-services', des: 'our-services' },
	{ path: 'periodontics', des: 'our-services' },
	{ path: 'periodontics', des: 'our-services' },
	{ path: 'professional-dental-cleaning', des: 'our-services' },
	{ path: 'removable-dentures', des: 'our-services' },
	{ path: 'restorative-dentistry', des: 'our-services' },
	{ path: 'sedation-dentistry-1', des: 'our-services' },
	{ path: 'sleep-apnea-1', des: 'our-services' },
	{ path: 'surgical-dentistry', des: 'our-services' },
	{ path: 'teeth-whitening', des: 'our-services' },
	{ path: 'wisdom-tooth-extraction', des: 'our-services' },

	{ path: '5-key-remedies-to-help-stop-snoring-1', des: 'blog' },
	{
		path: 'a-guide-on-the-best-materials-for-full-partial-dentures',
		des: 'blog',
	},
	{
		path: 'all-on-four-vs-all-on-six-which-is-a-better-dental-implant',
		des: 'blog',
	},
	{
		path: 'causes-symptoms-and-treatment-for-obstructive-sleep-apnea',
		des: 'blog',
	},
	{ path: 'common-types-of-complicated-tooth-extraction', des: 'blog' },
	{ path: 'dental-bonding-vs-veneers-which-one-to-get', des: 'blog' },
	{ path: 'essential-preventive-dental-procedures-for-kids', des: 'blog' },
	{ path: 'foods-that-can-cause-gum-disease-in-your-teeth', des: 'blog' },
	{
		path: 'full-vs-partial-dentures-which-can-be-a-better-option',
		des: 'blog',
	},
	{
		path: 'general-dentist-vs-pediatric-dentist-which-is-better-for-children',
		des: 'blog',
	},
	{ path: 'how-are-professional-teeth-cleaning-helpful', des: 'blog' },
	{
		path: 'implant-supported-bridges-and-dentures-which-is-the-better-option',
		des: 'blog',
	},
	{
		path: 'occlusal-guard-vs-night-guard-which-is-the-better-option',
		des: 'blog',
	},
	{
		path: 'professional-teeth-cleaning-improve-gum-and-tooth-health',
		des: 'blog',
	},
	{ path: 'symptoms-and-causes-of-periodontal-disease', des: 'blog' },
	{
		path: 'top-6-tips-to-make-your-crowns-and-bridges-last-longer',
		des: 'blog',
	},
	{ path: 'types-of-dental-bone-grafting-you-need-to-know', des: 'blog' },
	{
		path: 'types-of-oral-sedation-used-by-dentists-during-treatment',
		des: 'blog',
	},
	{ path: 'types-of-retainers-you-need-to-know', des: 'blog' },
	{ path: 'types-of-upper-partial-dentures-you-need-to-know', des: 'blog' },
	{
		path: 'what-are-the-benefits-of-dental-crowns-and-bridges-treatment',
		des: 'blog',
	},
	{
		path: 'what-is-oral-sedation-and-how-does-it-works-in-dentistry',
		des: 'blog',
	},
	{ path: 'what-is-a-sinus-lift-why-do-you-need-it', des: 'blog' },
	{ path: 'whygetting-root-canal-treatment-is-a-good-option', des: 'blog' },
	{
		path: 'why-dental-core-beam-computer-tomography-cbct-is-useful',
		des: 'blog',
	},
	{ path: 'why-should-you-get-invisible-aligners-for-your-teeth', des: 'blog' },
];
const redirects = [
	{ path: 'services', des: 'our-services' },
	{ path: 'appointment', des: 'contacts' },
];

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	swcMinify: true,
	async redirects() {
		return paths.map((route) => {
			return {
				source: `/${route.path}`,
				destination: `/${route.des}/${route.path}`,
				permanent: true,
			};
		});
	},
	async redirects() {
		return redirects.map((route) => {
			return {
				source: `/${route.path}`,
				destination: `/${route.des}`,
				permanent: true,
			};
		});
	},
};

module.exports = nextConfig;
