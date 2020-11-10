import React from "react"
import reactImg from "../../../../assets/img/react.png"
import angularImg from "../../../../assets/img/angularjs.png"
import rszNode from "../../../../assets/img/rsz_nodejs.png"
import mongo from "../../../../assets/img/mongodb.png"

const Clients = () => {
    return (
        <div class="owl-carousel clients-carousel">
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/go-old/go-old_128x128.png" alt="GO" />
            <img src={reactImg} alt="React" />
            <img src={angularImg} alt="Angular" />
            <img src={rszNode} alt="Node" />
            <img src={mongo} alt="Node" />
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/python/python_128x128.png" alt="Python" />
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp_128x128.png" alt="CPP" />
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/csharp/csharp_128x128.png" alt="C Sharp" />
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/java/java_128x128.png" alt="Java" />
            <img src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/php/php_128x128.png" alt="PHP" />
        </div>

    );
}

export default Clients;

