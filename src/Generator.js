import { useState, useEffect } from "react";
import { FaMoon ,FaSun} from "react-icons/fa";
const Generator = () => {
    const [news, setNews] = useState([]);
    const[darkMode,setDarkMode]=useState(false)
    const getMeals = async () => {
        const ApiUrl = `https://www.themealdb.com/api/json/v1/1/random.php
  `;
        const response = await fetch(ApiUrl);
        const data = await response.json();
        setNews(data.meals);
    };

    useEffect(() => {
        getMeals();
    }, []);

    const addDarkMode = () => {
        let darkmode = document.querySelector("html");
        darkmode.classList.toggle("dark");
        setDarkMode(!darkMode)
    };
    return (
        <>
            <header className="font-acme sticky top-0 ">
                <div className="flex  justify-between items-center  w-full  px-10 py-4 bg-gray-100 dark:bg-gray-700">
                    <button
                        onClick={() => {
                            getMeals();
                        }}
                        className="bg-purple-700 text-white  text-lg px-5 py-2  hover:bg-blue-500"
                    >
                        Generate Meal
                    </button>
                    <button
                        onClick={() => {
                            addDarkMode();
                        }}
                        
                    >
                        {darkMode ?<FaSun className="dark:text-yellow-400 text-lg"/>: <FaMoon className="dark:text-slate-400 text-lg"/> }
                    </button>
                </div>
            </header>
            <div className="	dark:bg-gray-700 dark:text-white">
                <h3 className="text-2xl font-bold pt-4 text-center font-acme">
                    Meal Generator
                    <div className="h-1 bg-red-400 w-16 mx-auto dark:bg-green-500"></div>
                </h3>
                {news.map((element) => {
                    return (
                        <div className="flex flex-wrap space-x-5 space-y-6 font-acme justify-between md:justify-start items-center container  w-full  px-10 py-4 " key={element.idMeal}>
                            <div className="md:flex-1 text-center md:text-left">
                                <h3 className=" text-3xl font-bold py-2  text-center md:text-left">
                                    {element.strMeal}
                                    <div className="h-1 bg-red-400 w-16 mx-auto md:hidden sm:block  dark:bg-green-500"></div>
                                    <div className="h-1 bg-red-400 w-16 mr-auto hidden md:block  dark:bg-green-500"></div>
                                </h3>
                                <h4 className=" text-xl text-black-700 py-2 font-bold  text-center md:text-left">Views:{element.strCategory}</h4>
                                <h4 className=" text-xl text-black-700  font-bold  text-center md:text-left">Comments:{element.strArea}</h4>
                                <p className=" text-gray-700  dark:text-white py-2 font-bold  text-center md:text-left">Comments:{element.strInstructions.substring(0, 320)}.....</p>
                                <p className="text-black-700 pb-2 text-lg md:text-left text-center font-bold  ">Ingredient:</p>
                                <div className=" text-gray-700  pb-2 text-base w-full md:w-1/2 md:text-left flex-col font-bold flex align-center justify-between space-y-4">
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left">1: {element.strIngredient1}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left">2: {element.strIngredient2}</span>
                                    <span className="bg-gray-200  dark:bg-white p-3 md:text-left">3: {element.strIngredient3}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left">4: {element.strIngredient4}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left">5: {element.strIngredient5}</span>
                                </div>
                            </div>

                            <div className="md:flex-1 ">
                                <img src={element.strMealThumb} className="w-full rounded-md" alt={element.strMeal} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Generator;
