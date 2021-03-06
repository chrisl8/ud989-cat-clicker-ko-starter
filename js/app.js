var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nickNames: ['Tigger']
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nickNames: ['Casper']
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nickNames: ['Shooby']
}, {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nickNames: ['Zzzzz']
}];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.level = ko.computed(function() {
        if (this.clickCount() > 10) {
            return 'Infant';
        } else {
            return 'NewBorn';
        }
    }, this); // Important! ;)
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observable(data.nickNames);
    /* Use "text: $data" if it is an array,
    and not an object. */

};

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.setCurrentCat = function(data) {
        self.currentCat(data);
    };
};

ko.applyBindings(new ViewModel());
