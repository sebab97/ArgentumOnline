var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var graphics;
(function (graphics) {
    var Screen = (function () {
        //TODO: use webgl context
        /**
         * Construct the class.
         * @param {HTMLCanvasElement} canvas Element that provides the drawing context.
         */
        function Screen(canvas) {
            this.width = canvas.width;
            this.height = canvas.height;
            this.context = canvas.getContext('2d');
        }
        /**
         * Erase any drawn content.
         */
        Screen.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height);
        };
        /**
         * [drawTexture description]
         * @param {Texture} texture [description]
         */
        Screen.prototype.drawTexture = function (texture) {
            //this.context.drawImage();
        };
        return Screen;
    }());
    graphics.Screen = Screen;
})(graphics || (graphics = {}));
var graphics;
(function (graphics) {
    //TODO: extends HTMLImageElement
    var Texture = (function (_super) {
        __extends(Texture, _super);
        function Texture(src) {
            var _this = _super.call(this) || this;
            _this.src = src;
            return _this;
        }
        return Texture;
    }(HTMLImageElement));
    graphics.Texture = Texture;
})(graphics || (graphics = {}));
var Argentum;
(function (Argentum) {
    var Main = (function () {
        function Main() {
            /**
             * [textures description]
             * @type {graphics.Texture[]}
             */
            this.textures = [];
            this.canvas = document.getElementById('canvas');
            this.screen = new graphics.Screen(this.canvas);
            this.textures.push(new graphics.Texture('png/0.png'));
        }
        return Main;
    }());
    Argentum.Main = Main;
    /* Initialize client */
    window.addEventListener('load', function () { return new Main(); });
})(Argentum || (Argentum = {}));
