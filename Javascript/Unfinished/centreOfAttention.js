
class Image
{
 constructor(data, w, h)
 {
  this.pixels = data.slice();
  this.width = w;
  this.height = h;
 }
}

var picture = new Image( [1,1,4,4,4,4,2,2,2,2,
                          1,1,1,1,2,2,2,2,2,2,
                          1,1,1,1,2,2,2,2,2,2,
                          1,1,1,1,1,3,2,2,2,2,
                          1,1,1,1,1,3,3,3,2,2,
                          1,1,1,1,1,1,3,3,3,3], 10, 6 
);

var picture2 = new Image(  [1,1,1,2,2,1,
                            2,2,1,2,2,1,
                            2,2,2,2,1,1,
                            1,2,2,2,1,1,
                            1,2,2,1,1,1,
                            1,1,2,1,1,1], 6, 6
)




function central_pixels(img, colour)
{
    const DEPTHMAP = {}
    const COLORDEPTH = {1:[]}

    function get_pixel(x, y){
        return x + (y-1)*img.width - 1
    }

    for(pixel in img.pixels){
        let x = pixel%img.width + 1
        let y = Math.ceil(pixel/img.width)
        if(!(pixel%img.width))y+=1
        if(y == 1 || y == img.height || x == 1 || x == img.width){
            DEPTHMAP[pixel] = 1;
            if(img.pixels[pixel] == colour)COLORDEPTH[1].push(pixel)
        }
        if(img.pixels[get_pixel(x+1, y)] !== img.pixels[pixel] || 
           img.pixels[get_pixel(x, y+1)] !== img.pixels[pixel] ||
           img.pixels[get_pixel(x-1, y)] !== img.pixels[pixel] ||
           img.pixels[get_pixel(x, y-1)] !== img.pixels[pixel]
        ){
            DEPTHMAP[pixel] = 1;
            if(img.pixels[pixel] == colour)COLORDEPTH[1].push(pixel)
        }


    }
    return DEPTHMAP
}


// Tests 

console.log(central_pixels(picture, 1)) // [ 32 ]
