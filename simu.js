Determinant = ["Select type of Matrix ", "2 × 2", "3 × 3"];
SimultaneousEquation = [
    "Select type of Equation",
    "A 2-variable equation",
    "A 3-variable equation",
];
let D;
function check() {
    if (calc.value === "setOption") {
        getResult.innerHTML = "";
        getWht.innerHTML = " ";
        put.innerHTML = " ";
        for (let set of Determinant) {
            option(set);
        }
    } else {
        getResult.innerHTML = "";
        put.innerHTML = " ";
        getWht.innerHTML = " ";
        for (let set of SimultaneousEquation) {
            option(set);
        }
    }
}
function option(get) {
    tr = `<option>${get}</option>`;
    getWht.innerHTML += tr;
}

function display() {
    if (getWht.value === "A 2-variable equation") {
        put.innerHTML = " ";
        input1();
        getResult.innerHTML = " ";
    } else if (getWht.value === "A 3-variable equation") {
        put.innerHTML = "";
        input2();
        getResult.innerHTML = "";
    } else if (getWht.value === "Select type of Equation") {
        put.innerHTML = "";
        getResult.innerHTML = "";
    } else if (getWht.value === "Select type of Matrix") {
        put.innerHTML = "";
        getResult.innerHTML = "";
    } else if (getWht.value === "2 × 2") {
        put.innerHTML = "";
        input3();
        getResult.innerHTML = "";
    } else if (getWht.value === "3 × 3") {
        put.innerHTML = "";
        input4();
        getResult.innerHTML = "";
    }
}

function input1() {
    td = `<div class="form-group mt-2 font-monospace">
      <input id="a11" type="number" onfocus="fcs()"> <var><b>x</b></var> + <input id="a12" type="number" onfocus="fcs()"> <var><b>y</b></var>  =  <input id="c1" type="number" onfocus="fcs()">
     </div> 
     <div class="form-group mt-2 font-monospace ">
      <input id="a21"type="number" onfocus="fcs()"> <var><b>x</b></var> + <input id="a22" type="number" onfocus="fcs()"> <var><b>y</b></var>  =  <input id="c2" type="number" onfocus="fcs()">
     </div>
     <div class="w-75 d-flex justify-content-center">
     <button id="btn" class="btn btn-md w-50 mb-3 font-monospace" onclick="solution1(a11.value,a12.value,a21.value,a22.value,c1.value,c2.value)"><b>SOLVE</b></button>
     </div>
     `;
    put.innerHTML += td;
}
function input2() {
    td = `
  <div class="form-group mt-2 font-monospace">
<input type="number" id="a11" onfocus="fcs()">  <var><b>x</b></var> + <input id="a12" type="number" onfocus="fcs()"> <var><b>y</b></var> + <input id="a13" type="number" onfocus="fcs()"> <var><b>z</b></var>  =  <input onfocus="fcs()" type="number" id="c1">
</div> 
<div class="form-group mt-2 font-monospace">
<input type="number" id="a21" onfocus="fcs()"> <var><b>x</b></var> + <input id="a22" type="number" onfocus="fcs()"> <var><b>y</b></var> + <input id="a23" type="number" onfocus="fcs()"> <var><b>z</b></var>  =  <input onfocus="fcs()" type="number" id="c2">
</div> 
<div class="form-group mt-2 font-monospace">
<input type="number" id="a31" onfocus="fcs()"> <var><b>x</b></var> + <input id="a32" type="number" onfocus="fcs()"> <var><b>y</b></var> + <input id="a33" type="number" onfocus="fcs()"> <var><b>z</b></var> = <input onfocus="fcs()" type="number" id="c3">
</div>
<div class="w-100 d-flex justify-content-center">
     <button class="btn btn-md w-50 mb-3" onclick="solution2(a11.value,a12.value,a13.value,a21.value,a22.value,a23.value,a31.value,a32.value,a33.value,c1.value,c2.value,c3.value)"><b>SOLVE</b></button>
     </div>`;
    put.innerHTML += td;
}
function input3() {
    td = `<div id="iput"> 
    <div class="w-100 mt-3 ms-3" style="font-size:25px;">MATRIX A = </div>
    <div class="w-100">
  <div>
  <input id='a11' type="number" placeholder="a11" class="mt-1 me-3 w-25" onfocus="fcs()"> <input id='a12' placeholder="a12" type="number"class="mt-1 ms-3 w-25" onfocus="fcs()">
  </div>
  <div>
  <input id='a21' type="number" placeholder="a21" class="mt-3 me-3 w-25" onfocus="fcs()"> <input id='a22' placeholder="a22" type="number"class="mt-3 ms-3 w-25"onfocus="fcs()">
</div>
</div>
</div>
<div class="w-100  d-flex justify-content-center">
     <button class="btn btn-md w-75 mb-3 font-monospace" onclick="chkdeter(a11.value,a12.value,a21.value,a22.value)"><b>CALCULATE</b></button>
     </div>`;
    put.innerHTML += td;
}
function input4() {
    td = `<div id="iput"> 
    <div class="w-100 mt-5 ms-3" style="font-size:25px;">MATRIX A = </div>
    <div class="w-100">
  <div>
  <input type="number" id='a11' placeholder="a11" class="mt-1 me-1 w-25" onfocus="fcs()"> <input id='a12' placeholder="a12" type="number" class="mt-1 ms-1 w-25" onfocus="fcs()"> <input id='a13' placeholder="a13" type="number"class="mt-1 ms-2 w-25" onfocus="fcs()">
  </div>
  <div>
  <input type="number" id='a21' placeholder="a21" class="mt-3 me-1 w-25" onfocus="fcs()"> <input id='a22' placeholder="a22" type="number"class="mt-3 ms-1 w-25" onfocus="fcs()"> <input id='a23' placeholder="a23" type="number"class="mt-1 ms-2 w-25" onfocus="fcs()">
</div>
  <div>
  <input type="number" id='a31' placeholder="a31" class="mt-3 me-1 w-25" onfocus="fcs()"> <input id='a32' placeholder="a32" type="number"class="mt-3 ms-1 w-25"onfocus="fcs()"> <input id='a33' placeholder="a33" type="number"class="mt-1 ms-2 w-25"onfocus="fcs()">
</div>
</div>
</div>
<div class="w-100 d-flex justify-content-center">
     <button class="btn btn-md w-75 mb-3 font-monospace" onclick="determinant2(a11.value,a12.value,a13.value,a21.value,a22.value,a23.value,a31.value,a32.value,a33.value)"><b>CALCULATE</b></button>
     </div>`;
    put.innerHTML += td;
}
let fcs = () => {
    getResult.innerHTML = "";
};
function clear() {
    a11.value = a12.value = a21.value = a22.value = null;
}
function chkdeter(a11, a12, a21, a22) {
    clear();
    determ(a11, a12, a21, a22);
}
function determ(a11, a12, a21, a22) {
    D = a11 * a22 - a12 * a21;
    getResult.innerHTML = `Determinant of Matrix A = |A| = ${D}`;
}
function clear1() {
    a11.value = a12.value = a21.value = a22.value = c1.value = c2.value = null;
}
function solution1(a11, a12, a21, a22, c1, c2) {
    clear1();
    determ(a11, a12, a21, a22);
    Dx = c1 * a22 - c2 * a12;
    Dy = a11 * c2 - c1 * a21;
    x = Dx / D;
    y = Dy / D;
    getResult.innerHTML = `<var>x</var> = ${x}, <var>y</var> = ${y}`;
}

function determinant2(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    clear2();
    determinant(a11, a12, a13, a21, a22, a23, a31, a32, a33);
}
function determinant(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    D =
        a11 * (a22 * a33 - a23 * a32) -
        a12 * (a21 * a33 - a23 * a31) +
        a13 * (a21 * a32 - a22 * a31);
    getResult.innerHTML = `Determinant of Matrix A = |A| = ${D}`;
}
function clear2(params) {
    a11.value = a12.value = a13.value = a21.value = a22.value = a23.value = a31.value = a32.value = a33.value = null;
}
function clear3(params) {
    a11.value = a12.value = a13.value = a21.value = a22.value = a23.value = a31.value = a32.value = a33.value = c1.value = c2.value = c3.value = null;
}
function solution2(a11, a12, a13, a21, a22, a23, a31, a32, a33, c1, c2, c3) {
    clear3();
    determinant(a11, a12, a13, a21, a22, a23, a31, a32, a33);
    Dx =
        c1 * (a22 * a33 - a23 * a32) -
        a12 * (c2 * a33 - a23 * c3) +
        a13 * (c2 * a32 - a22 * c3);
    Dy =
        a11 * (c2 * a33 - a23 * c3) -
        c1 * (a21 * a33 - a23 * a31) +
        a13 * (a21 * c3 - a31 * c2);
    Dz =
        a11 * (a22 * c3 - a32 * c2) -
        a12 * (a21 * c3 - c2 * a31) +
        c1 * (a21 * a32 - a22 * a31);
    x = Dx / D;
    y = Dy / D;
    z = Dz / D;
    getResult.innerHTML = `<var>x</var> = ${x}, <var>y</var> = ${y}, <var>z</var> = ${z}`;
}
