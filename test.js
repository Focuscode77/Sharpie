console.log('I am in the console');

function love(hello) {

    if ("test" === hello) {

        console.log('variable  is  a  string')


    } else {


        console.log('try again')

    }


}



const eagles = {

    name: 'terrance',
    lastName: 'Test',
    greet: () => {

        var fullname = this.name + '' + this.lastName;

        console.log(fullname)

    }





}



console.log(eagles.name);
console.log(eagles.lastName)