const divisionNum = 4;
// html content for the titlebox
const prefixStr = `
    <div class="titlebox d-flex direction-vertical space-between align-center">
        <div class="d-flex">
            <p>X&nbsp;&nbsp;</p>
            <hr />
            <p>&nbsp;&nbsp;X</p>
        </div>
        <div class="main-title">
            <h3>九九乘法表</h3>
            <h4>MULTIPLICATION TABLE</h4>
        </div>
        <div class="d-flex">
            <p>X&nbsp;&nbsp;</p>
            <hr />
            <p>&nbsp;&nbsp;X</p>
        </div>
    </div>
`;

$(document).ready(function () {
  // allBoxStr 需先定義為空字串，否則累加的最前面會出現一次 undefined
  var allBoxStr = ``;
  for (let i = 2; i < 10; i++) {
    var leftStr = ``;
    var rightStr = ``;
    for (let j = 1; j < 10; j++) {
      if (j < divisionNum) {
        leftStr += `<p>${i} x ${j} = ${i * j}</p>`;
      } else {
        rightStr += `<p>${i} x ${j} = ${i * j}</p>`;
      }
    }
    allBoxStr += `
    <div class="numbox">
        <div class="left-sec">
            <h2>${i}</h2>
            ${leftStr}
        </div>
        <div class="right-sec">
            ${rightStr}
        </div>
        <div class="clearfix"></div>
    </div>
    `;
  }
  $("#content").html(prefixStr + allBoxStr);
});
