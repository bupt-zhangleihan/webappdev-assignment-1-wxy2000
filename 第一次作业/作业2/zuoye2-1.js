function triangleArea (width,height=2){     //高默认值为2
    console.log("三角形的宽为：",width);    //输出三角形的宽
    console.log("三角形的高为：",height);   //输出三角形的高
    var area=(width*height)/2;              //计算面积
    console.log("三角形的面积为：",area);       //输出三角形的面积
}
triangleArea(3);
triangleArea(7,9);