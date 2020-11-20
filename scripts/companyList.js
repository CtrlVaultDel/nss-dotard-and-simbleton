import { useCompanies } from "./companyProvider.js";
import { companies } from "./companies.js";

const contentTarget = document.querySelector(".companies");

export const companyList = () => {
    const companyArray = useCompanies();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>";

    companyArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += companies(companyObject);
        }
    );
}