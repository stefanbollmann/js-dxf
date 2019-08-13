class Insert
{
    constructor(x, y, z, ilayer, iblock)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.ilayer = ilayer;
        this.iblock = iblock;
        console.log("InsertLayer:" + this.ilayer);
    }

    toDxfString()
    {
        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
        let s = `0\nINSERT\n`;
        s += `8\n${this.ilayer}\n`;

        console.log("InsertLayer:" + this.ilayer);

        s += `2\n${this.iblock}\n`;
        s += `10\n${this.x}\n20\n${this.y}\n30\n${this.z}\n`;
        return s;
    }
}

module.exports = Insert;