class Block
{
    constructor(name, layer, x, y, z)
    {
        this.name = name;
        this.layer = layer;
        this.x = x;
        this.y = y;
        this.z = z;
        this.shapes = [];
    }

    addShape(shape)
    {
        this.shapes.push(shape);
        shape.layer = this.layer;
    }

    shapesToDxf()
    {
        let s = '';
        for (let i = 0; i < this.shapes.length; ++i)
        {
            s += this.shapes[i].toDxfString();
        }         
        return s;
    }


    toDxfString()
    {
        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/block_al_u05_c.htm

        let s = `0\nBLOCK\n`;
        s += `8\n${this.layer}\n`;
        s += `3\n${this.name}\n`;
        s += `10\n${this.x}\n20\n${this.y}\n30${this.z}\n`;
        s += `2\n${this.name}\n`;
        s += `1\n\n`;
        for (let i = 0; i < this.shapes.length; ++i)
        {
            s += this.shapes[i].toDxfString();
        }
        s = `0\nENDBLK\n`;    
        return s;
    }
}

module.exports = Block;