class Insert
{
    constructor(x, y, z, ilayer, iblock)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.ilayer = ilayer;  //Layer to insert Block
        this.iblock = iblock;  //Block name
    }

    toDxfString()
    {
        let s = `0\nINSERT\n`;
        s += `8\n${this.ilayer}\n`;
        s += `2\n${this.iblock}\n`;
        s += `10\n${this.x}\n20\n${this.y}\n30\n${this.z}\n`;
        return s;
    }
}

module.exports = Insert;