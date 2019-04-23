import Component from '@ember/component';


function binaryGap(num) {
    var bin = Math.abs(num).toString(2),
        finalMax = 0,
        currentMax;

    for (var i = 0; i < bin.length; i++) {
        currentMax = 0;
        while (bin[i] === "0") {
            ++currentMax && ++i;
        }
        finalMax = Math.max(finalMax, currentMax);
    }
    return finalMax;
}

export default Component.extend({
    
    init() {
        this._super(...arguments);
        this.set("result", 0);
    },

    actions: {
        handleInput() {
            this.set("result", binaryGap(this.value));
        }
    }
});
