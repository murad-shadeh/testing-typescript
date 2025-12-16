"use strict";
// tuples
// the order is important
// RBG color
const color = [255, 0, 0];
const goodRes = [200, "OK"];
goodRes[0] = 201; // valid
// goodRes[1] = 404; // invalid
// Wierdly enough, TS allows push method in tuples, this has to do with how tuples are implemented in TS
goodRes.push("New Value"); // valid
// or even popping values
goodRes.pop(); // valid
// tuples are not necessary to use
const responses = [[404, "Not Found"]];
// Introducing enums
var OrderStatus;
(function (OrderStatus) {
    // THEY START AT 0 BY DEFAULT
    // we can give them values
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED); // true
// More on enums
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
// in imple terms => enums are set of name we can refer back to.
// ---------------------------------------------------------------
