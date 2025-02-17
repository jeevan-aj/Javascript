console.log(this)

const obj = {
    a: 10,
    x: function () {
        console.log(this); // {a: 10, x: f()}
        console.log(this.a); // 10
    }
}

obj.x()