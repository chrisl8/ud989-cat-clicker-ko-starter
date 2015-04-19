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

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'http://www.flickr.com/photos/big',
        nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    }));

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
