function MenuItem(name, cal, gluten, lactose) {
    this.fullname = name;
    this.calories = cal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.brafordig = function (){
        return this.fullname +  " innehåller "  + this.calories + " antal kalorier "
    };
}
var burgare = new MenuItem('Dödsburgaren', 2000, 'true', 'true');
console.log(burgare.brafordig());