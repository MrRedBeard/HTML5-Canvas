# HTML5-Canvas
### Demo of HTML5 Canvas and JavaScript

Created a JS class to handle canvas actions

### Supports
* FontAwesome fonts and left room to use others
* Images
* Text

#### Initialize
var a = new TCanvas('#myCanvas'); 

#### Configure
a.config('2d', '800px', '480px', true); 

#### Add
* a.addImg('map.png', 0, 0, 800, 480);
* a.addText('\uF276', 'FontAwesome', '48px', "#8c41f4", 654, 277); //Pin
* a.addsvg(); // Works without bkg img
