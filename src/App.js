import { useEffect, useState } from "react";
import logo1 from "./pngs/670445-200.png";
import logo2 from "./pngs/6856640.png";
function App() {
  const [calc, setcalc] = useState("");
  const [theme, Settheme] = useState("");
  const [isDark, setDark] = useState(true);
  useEffect(() => {
    isDark ? Settheme("dark") : Settheme("");
  }, [isDark]);
  const ops = ["/", "*", "+", "-", "."];
  const onpress = (key) => {
    if (
      (ops.includes(key) && calc === "") ||
      (ops.includes(key) && ops.includes(calc.slice(-1))) ||
      calc.length > 19
    ) {
      return;
    }

    setcalc(calc + key);
  };
  const calculate = () => {
    if (ops.includes(calc.slice(-1)) || calc === "") {
      return;
    }
    setcalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setcalc(value);
  };
  console.log(calc);
  const numbers = () => {
    const digit = [];
    for (let index = 9; index > 0; index--) {
      digit.push(
        <button
          className="text-2xl  bg-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-purple-700 text-yellow-300 p-6 rounded-xl"
          key={index}
          onClick={() => onpress(index.toString())}
        >
          {index}
        </button>
      );
    }
    return digit;
  };

  return (
    <div className={theme}>
      <div className="object-center bg-purple-700 dark:bg-gray-700 transition delay-150 ">
        <button
          type="submit"
          className="p-2 w-12 h-12 shadow-xl rounded-md object-center dark:bg-gray-700"
          onClick={() => setDark(!isDark)}
        >
          <img
            src={isDark ? logo1 : logo2}
            alt="logo"
            className="text-center relative object-center"
          ></img>
        </button>
      </div>
      <div className="h-screen  bg-purple-700 dark:bg-gray-700 transition delay-150 ">
        <div className=" pt-15 bg-purple-700  justify-center text-center flex pb-25  dark:bg-gray-700 transition delay-150  ">
          <div className=" box-border  bg-purple-800 p-3 rounded-2xl gap-4   shadow-lg object-contain md:object-scale-down dark:bg-gray-800">
            <div className=" dark:bg-gray-500 text-2xl font-bold shadow-inner text-yellow-400 text-right rounded-t-lg  py-3 p-6 bg-purple-500 pb-5 pt-6 overflow-hidden ">
              {calc || "0"}
            </div>
            <div className=" flex-auto flex shadow-inner ">
              <button
                className=" text-2xl bg-purple-600 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-purple-700 p-6 text-yellow-400 rounded-bl-lg"
                value="/"
                onClick={() => onpress("/")}
              >
                /
              </button>
              <button
                className=" text-2xl bg-purple-600 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-purple-700 p-6 text-yellow-400"
                onClick={() => onpress("*")}
              >
                x
              </button>
              <button
                className=" text-2xl bg-purple-600 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-purple-700 text-yellow-400 p-6 "
                onClick={() => onpress("+")}
              >
                +
              </button>
              <button
                className=" text-2xl bg-purple-600 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-purple-700 text-yellow-400 p-6 "
                onClick={() => onpress("-")}
              >
                {" "}
                -{" "}
              </button>
              <button
                className=" text-2xl bg-purple-600 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-purple-700 text-yellow-400 p-6  rounded-br-lg "
                onClick={deleteLast}
              >
                DEL
              </button>
            </div>
            <div className="grid grid-flow-row grid-cols-3 grid-rows-3  ">
              {numbers()}
              <button
                className=" text-2xl bg-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-purple-700 text-white p-6 rounded-xl "
                onClick={() => onpress("0")}
              >
                0
              </button>
              <button
                className=" text-2xl bg-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-purple-700 text-white p-6 rounded-xl"
                onClick={() => onpress(".")}
              >
                .
              </button>
              <button
                className=" text-2xl bg-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-purple-700 text-white p-6 rounded-xl"
                onClick={calculate}
              >
                {" "}
                ={" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
