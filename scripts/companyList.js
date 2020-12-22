import { useCompanies } from "./companyProvider.js";
import { newYorkCompanies } from "./companyProvider.js";
import { manufacturingCompanies } from "./companyProvider.js";
import { companies, companiesTemplate } from "./companies.js";
import { findCompany } from "./companyProvider.js";

// Lists all of the companies
export const companyList = () => {
    const contentTarget = document.querySelector(".businessList--All__list");
    const companyArray = useCompanies();

    // Appends the full list of companies to the DOM after converting it to HTML
    contentTarget.innerHTML = companyArray.map((companyObject) => companies(companyObject)).join("");
};

// Only lists New York companies
export const newYorkCompanyList = () => {
    const contentTarget = document.querySelector(".businessList--NewYork__list");

    // Appends the list of New York companies to the DOM after converting it to HTML
    contentTarget.innerHTML = newYorkCompanies.map((companyObject) => companies(companyObject)).join("");
};

// Only lists manufacturing companies
export const manufacturingCompanyList = () => {
    const contentTarget = document.querySelector(".businessList--Manufacturing__list");

    // Appends the list of manufacturing companies to the DOM after converting it to HTML
    contentTarget.innerHTML = manufacturingCompanies.map((companyObject) => companies(companyObject)).join("");
};

// This is the article that company search results will be sent to
const companySearchResultSection = document.querySelector(".foundCompany");

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            // Set the user's input to the variable lookingFor
            let lookingFor = keyPressEvent.target.value;
            
            // Call the function findCompany with lookingFor as the parameter and assign the value to foundBusiness
            const foundBusiness = findCompany(lookingFor);

            // If the company name of the business object is partly similar to the user input, push to page
            if (foundBusiness.companyName.includes(keyPressEvent.target.value)){
                companySearchResultSection.innerHTML = companiesTemplate(foundBusiness);
            }
        }
    });