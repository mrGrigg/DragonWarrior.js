var block = 16;
var size = 2;
var scale = block * size;
 

$().ready(function() {
    var context = document.getElementById('screen').getContext('2d');
    
    for (var i = 0; i < basicMap.length; i++) {
        var node = basicMap[i];
        var tile = tiles[node[0]];
        var x = node[2] * scale;
        var y = node[1] * scale;

        var image = document.createElement('img');
        image.src = tile;

        image.onload = (function(image, x, y) {
            return function() {
                context.drawImage(image, x, y, scale, scale);
            };
        })(image, x, y);
    }
});

//A 5x5 map
var basicMap = [
    //This is just a list of x, y coordinates and tiles
    ['grass', 0, 0]
    , ['grass', 0, 1]
    , ['grass', 0, 2]
    , ['grass', 0, 3]
    , ['coastLeft', 0, 4]
    , ['grass', 1, 0]
    , ['hill', 1, 1]
    , ['hill', 1, 2]
    , ['grass', 1, 3]
    , ['coastLeft', 1, 4]
    , ['grass', 2, 0]
    , ['desert', 2, 1]
    , ['castle', 2, 2]
    , ['desert', 2, 3]
    , ['coastLeft', 2, 4]
    , ['town', 3, 0]
    , ['greenStairsDown', 3, 1]
    , ['trees', 3, 2]
    , ['trees', 3, 3]
    , ['coastLeft', 3, 4]
    , ['marsh', 4, 0]
    , ['cave', 4, 1]
    , ['hill', 4, 2]
    , ['grass', 4, 3]
    , ['coastLeft', 4, 4]
];