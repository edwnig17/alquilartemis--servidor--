import app from "./app.js";
const main = ()=>{
    app.listen(app.get("port"));
    console.log(`Sip sirve ${app.get("port")}`);
}
main();