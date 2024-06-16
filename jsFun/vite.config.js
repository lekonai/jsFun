import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server:{
		fs:{
			allow: ['C:/Users/Omari/Documents/funny coding/js/realJsProject/jsFun/jsFun/static/HelveticaLight.ttf'],
		},
	},
});
