module Argentum {

	export class Main {
		/**
		 * Game screen.
		 * @type {HTMLCanvasElement}
		 */
		private canvas: HTMLCanvasElement;

		/**
		 * [screen description]
		 * @type {graphics.Screen}
		 */
		private screen: graphics.Screen;

		/**
		 * [textures description]
		 * @type {graphics.Texture[]}
		 */
		private textures: graphics.Texture[] = [];

		constructor() {
			this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
			this.screen = new graphics.Screen(this.canvas);
			this.textures.push(new graphics.Texture('png/0.png'));
		}
	}

	/* Initialize client */
	window.addEventListener('load', () => new Main());

}