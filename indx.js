let j = document.getElementById("jpT");
let jw = document.getElementById("jpW");
let k = document.getElementById("kd");
let km = document.getElementById("ktf");
let kf = document.getElementById("kdm");
let df = document.getElementById("dr");
let dfm = document.getElementById("dff");
let jh = document.getElementById("jph");
let jf = document.getElementById("jpf");
let jwf = document.getElementById("jwf");
let widthOverDrfa = document.getElementById("dfwidth");
let divOut = document.getElementById("outBut");
let btn = document.getElementById("c");

function convertToNumberAndValue(value) {
  return Number(value.value);
}

let newData = true;
btn.addEventListener("click", () => {
  // convert number and get value
  j = convertToNumberAndValue(j);
  jw = convertToNumberAndValue(jw);
  k = convertToNumberAndValue(k);
  km = convertToNumberAndValue(km);
  kf = convertToNumberAndValue(kf);
  df = convertToNumberAndValue(df);
  dfm = convertToNumberAndValue(dfm);
  jh = convertToNumberAndValue(jh);
  jf = convertToNumberAndValue(jf);
  jwf = convertToNumberAndValue(jwf);
  widthOverDrfa = convertToNumberAndValue(widthOverDrfa);

  // تخانه الكتف + الجمب + الميات
  let ktfwjmp = j + km + kf;
  let totalKtf = ktfwjmp + ktfwjmp;
  let totalDfm = dfm + dfm;
  //عرض الدرفه صافى كل حاجه
  let oneDf = (k + totalDfm - totalKtf) / df;

  let overWdth = widthOverDrfa / 2;
  let drfaTrf = oneDf - overWdth;

  let drfaWst = oneDf + widthOverDrfa;
  let ndrfaWst = df < 3 ? 0 : drfaWst.toPrecision(4);

  //   Tqsema
  let tqsema = function (df) {
    if (df == 3) {
      return 0.1;
    } else {
      return 0.6;
    }
  };
  //        dhr trf
  let widthDf = drfaTrf + kf + j; //129.3 + 5 + 2.7 = 137
  let dhrTrfany = widthDf + (jf + jwf) - (j + jw) - tqsema(df);
  let qtoaTrfany = dhrTrfany - (jf + jwf);
  let kNotM = k - (km - km);
  kNotM = kNotM - (widthDf + widthDf) + (jf + jwf);
  let dhrWst = df <= 3 ? kNotM : kNotM / 2;
  let ndhrWst = df < 3 ? 0 : dhrWst.toPrecision(4);

  let qtW = df < 3 ? 0 : (ndhrWst - (jwf + jwf)).toPrecision(4);
  let ndf = df - 1;
  let ndjhw = df < 3 ? 0 : jh + 2;
  let ndrh = jh - 2;

  //style
  divOut.style.display = "block";
  divOut.style.width = "100%";
  // بيانات الجدول
  data = [
    { Name: "قعده", length: k, width: 0, thickness: 0, quantity: 2 },
    {
      Name: "جمب طرف",
      length: jh,
      width: 0,
      thickness: j,
      quantity: 2,
    },
    {
      Name: "جمب وسط",
      length: jh,
      width: 0,
      thickness: jw,
      quantity: ndf,
    },
    {
      Name: "ظهر طرف",
      length: jh - 2,
      width: dhrTrfany.toPrecision(4),
      thickness: 0,
      quantity: 2,
    },
    {
      Name: "ظهر وسط",
      length: ndjhw,
      width: ndhrWst,
      thickness: 0,
      quantity: ndf - 1,
    },
    {
      Name: "درفه طرف",
      length: ndrh,
      width: drfaTrf.toPrecision(4),
      thickness: 0,
      quantity: 2,
    },
    {
      Name: "درفه وسط",
      length: df < 3 ? 0 : ndrh,
      width: ndrfaWst,
      thickness: 0,
      quantity: ndf - 1,
    },
    {
      Name: "رف طرف",
      length: qtoaTrfany.toPrecision(4),
      width: 0,
      thickness: 0,
      quantity: 0,
    },
    {
      Name: "رف وسط",
      length: qtW,
      width: 0,
      thickness: 0,
      quantity: 0,
    },
    { Name: "وكتف", length: jh, width: 0, thickness: kf, quantity: 2 },
  ];
  // الحصول على عنصر الجدول
  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  // إضافة الصفوف إلى الجدول
  data.forEach((item) => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.textContent = item.quantity;
    cell2.textContent = item.thickness;
    cell3.textContent = item.width;
    cell4.textContent = item.length;
    cell5.textContent = item.Name;
  });
  newData = !newData;
  if (newData) {
    table.innerHTML = "";
  }
});

// let j = 2.7;//تخانه الجمب الطرف
// let jw = 2.7;// تخانه الوصط
// let k = 270;// طول القعده
// let km = 0;//ميات القعده
// let kf = 4.5;//تخانه الكتف
// let df = 3;// عدد الدرف
// let dfm = 2;// ميات الدرف
// let jh = 205;// طول الجمب
// let jf = 1;// عمق مفحار الجمب الطرف
// let jwf = 0.8;// عمق مفحار الجمب الوسط
// let widthOverDrfa = 0;// الدرف بتكون عرض واحد دى الذياده
