module graphics {

	export class Screen {
		/**
		 * Width in pixels.
		 * @type {number}
		 */
		private width: number;

		/**
		 * Height in pixels.
		 * @type {number}
		 */
		private height: number;

		/**
		 * Drawing context.
		 * @type {CanvasRenderingContext2D}
		 */
		private context: CanvasRenderingContext2D;
		//TODO: use webgl context

		/**
		 * Construct the class.
		 * @param {HTMLCanvasElement} canvas Element that provides the drawing context.
		 */
		constructor(canvas: HTMLCanvasElement) {
			this.width = canvas.width;
			this.height = canvas.height;
			this.context = canvas.getContext('2d');
		}

		/**
		 * Erase any drawn content.
		 */
		public clear(): void {
			this.context.clearRect(0, 0, this.width, this.height);
		}

		/**
		 * [drawTexture description]
		 * @param {Texture} texture [description]
		 */
		public drawTexture(texture: Texture): void {
			//this.context.drawImage();
		}
	}

}