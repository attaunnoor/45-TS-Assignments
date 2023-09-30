"use strict";
function describe_city(city, country = "") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karchi", "Pakistan");
describe_city("Pakistam");
describe_city("london", "france");
