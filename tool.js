"use strict";
const fs = require("fs");
const sizeOf = require('image-size');
const path = "blogAlbum/photos";
const output = "themes/hexo-themes-next-master/source/album/photoslist.json";
var dimensions;
fs.readdir(path, function (err, files) {
    if (err) {
        console.error('err', err);
        return;
    }
    let arr = [];
    (function iterator(index) {
        if (index == files.length) {
            fs.writeFileSync(output, JSON.stringify(arr, null, "\t"));
            return;
        }
        fs.stat(path + "/" + files[index], function (err, stats) {
            if (err) {
                return;
            }
            if (stats.isFile()) {
                dimensions = sizeOf(path + "/" + files[index]);
                console.log(dimensions.width, dimensions.height);
                arr.push(dimensions.width + '.' + dimensions.height + ' ' + files[index]);
            }
            iterator(index + 1);
        })
    }(0));
});