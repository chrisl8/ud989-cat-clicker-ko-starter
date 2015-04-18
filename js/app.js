var ViewModel = function() {
    // Putting Model in ViewModel for simplicty
    // in this example,
    // but it is still FUNCTIONALLY separate
    this.clickCount = ko.observable(0);
    this.level = ko.computed(function() {
        if (this.clickCount() > 10) {
            return 'Infant';
        } else {
            return 'NewBorn';
        }
    }, this); // Important! ;)
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://www.flickr.com/photos/big');
    this.nickNames = ko.observableArray([
        { name: 'Tabtab' },
        { name: 'T-Bone' },
        { name: 'Mr. T' },
        { name: 'Tabitha Tab Tabby Catty Cat' }
    ]);
            /* Use "text: $data" if it is an array,
            and not an object. */

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
