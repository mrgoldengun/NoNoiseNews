
const CRYPTO_NEWS_TABLE_ID = "crypto-news-table"
const ECONOMY_NEWS_TABLE_ID = "economy-news-table"
const CRYPTO_NEWS_JSON_PATH = "./data/crypto_news.json"
const ECONOMY_NEWS_JSON_PATH = "./data/economy_news.json"

// ---------

function renderCryptoNewsTable(newsJsonData)
{
    renderNewsTable(newsJsonData, CRYPTO_NEWS_TABLE_ID)
}

function renderEconomyNewsTable(newsJsonData)
{
    renderNewsTable(newsJsonData, ECONOMY_NEWS_TABLE_ID)
}

function renderNewsTable(newsJsonData, newsTableId)
{
    let writableNewsTableDivision = document.getElementById(newsTableId);
    let table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("cellpadding", "5");
    table.setAttribute("cellspacing", "0");

    let tableHead = document.createElement("thead");
    let tableHeadRow = document.createElement("tr");
    // let headers = ["Title", "Author", "Category", "Publishing Time", "Source"];
    let headers = ["Title", "Source"];
    for (let header of headers) 
    {
        let tableHeader = document.createElement("th");
        
        tableHeader.textContent = header;
        tableHeadRow.appendChild(tableHeader);
    }
    tableHead.appendChild(tableHeadRow);

    let tableBody = document.createElement("tbody");
    for (let news of newsJsonData)
    {
        let tableBodyRow = document.createElement("tr");
        let tableTitleData = document.createElement("td");
        let tableAuthorData = document.createElement("td");
        let tableCategoryData = document.createElement("td");
        let tablePublishTimeData = document.createElement("td");
        let tableSourceData = document.createElement("td");

        let tableTitleAnchor = document.createElement("a");
        tableTitleAnchor.setAttribute("target", "_blank");
        tableTitleAnchor.setAttribute("rel", "noopener noreferrer")
        tableTitleAnchor.textContent = news.title;
        tableTitleAnchor.href = news.link;

        tableTitleData.appendChild(tableTitleAnchor);
        tableAuthorData.textContent = news.author;
        tableCategoryData.textContent = news.category;
        tablePublishTimeData.textContent = news.publishTime;
        tableSourceData.textContent = news.source;

        tableBodyRow.appendChild(tableTitleData);
        // tableBodyRow.appendChild(tableAuthorData);
        // tableBodyRow.appendChild(tableCategoryData);
        // tableBodyRow.appendChild(tablePublishTimeData);
        tableBodyRow.appendChild(tableSourceData);

        tableBody.appendChild(tableBodyRow);
    }
    
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    writableNewsTableDivision.appendChild(table)
}

window.onload = main();
function main()
{
    fetch(CRYPTO_NEWS_JSON_PATH)
        .then(response => response.json())
        .then(data => renderCryptoNewsTable(data))
        .catch(error => console.error(`Error loading ${CRYPTO_NEWS_JSON_PATH}: ${error}`));

    fetch(ECONOMY_NEWS_JSON_PATH)
        .then(response => response.json())
        .then(data => renderEconomyNewsTable(data))
        .catch(error => console.error(`Error loading ${ECONOMY_NEWS_JSON_PATH}: ${error}`))
}