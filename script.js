var friends = ['Joe', 'Ian', 'Rudy', 'Max', 'Rene'];
var locations = ['kitchen', 'bedroom', 'living room', 'basement', 'backyard', 'garage', 'bathroom', 'foyer', 'man cave', 'guest bedroom'];
var weapons = ['pogo stick', 'slinky', 'chai pet', 'shake weight', 'lava lamp', 'ironing board', 'fine china', 'couch pillow', 'advanced underwater basket weaving textbook', 'loofah', 'couch cover', 'banana hammock', 'picture of grandpa', 'vacuum', 'venus fly trap', 'exercise bike', 'bag of Bugles', 'CD player', 'Sega Dreamcast', 'grand piano'];

for (var i = 1; i <= 100; i++) {
    var h3 = $('<h3>Accusation ' + i + '</h3>');
    $('body').append(h3);
    $(h3).click(parentFunction(i));
};

function parentFunction(i) {
    function childFunction() {
    alert(`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${locations[i % locations.length]}!`)
    }
    return childFunction;
};


