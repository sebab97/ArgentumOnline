module graphics {

	//TODO: extends HTMLImageElement
	export class Texture extends HTMLImageElement {

		constructor(src: string) {
			super();
			this.src = src;
		}

		//TODO: add webgl methods like bindTexture
	}

}