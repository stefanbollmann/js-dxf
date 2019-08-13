const Drawing = require('./../src/Drawing');
const fs = require('fs');

let d = new Drawing();

d.drawText(10, 0, 10, 0, 'Hello World'); // draw text in the default layer named "0"
d.addLayer('l_green', Drawing.ACI.GREEN, 'CONTINUOUS');
d.setActiveLayer('l_green');
d.drawText(20, -70, 10, 0, 'go green!');

//or fluent
d.addLayer('l_yellow', Drawing.ACI.YELLOW, 'DOTTED')
.setActiveLayer('l_yellow')
.drawCircle(50.0, -30.0, 25.0);

d.addBlock('testblock','0',11.5,21.5,0);
d.setActiveBlock('testblock');
d.drawLineToBlock(10.5,10.5,100.5,100.5,'0');
d.drawCircleToBlock(30,30,60);
d.drawArcToBlock(100,100,40,45,135);
d.drawTextToBlock(10, 120, 40, 0, 'Blocktext');

d.insertBlock(30.5, 50.5 , 0, '0','testblock');

fs.writeFileSync('test.dxf', d.toDxfString());

