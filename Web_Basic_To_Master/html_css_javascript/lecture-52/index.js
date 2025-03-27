

let name = "Manish";
function outerfunction() {
    // let name = "Mozilla";
    {
        let name = "Shushant";
    }

    console.log(name);
    function innerfunction() {
        // let name = "Love";
        console.log(name);
    }
    return innerfunction;
}

let inner = outerfunction();

inner();

