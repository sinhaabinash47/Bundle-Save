document.addEventListener("DOMContentLoaded", function () {
    function showSelectedTable(selectedTableId) {
        const tables = document.getElementsByClassName("size-colour-tables");
        for (const table of tables) {
            if (table.id === selectedTableId) {
                table.style.display = "table";
            } else {
                table.style.display = "none";
            }
        }
    }

    const pairOneSection = document.querySelector(".pair-one");
    const pairTwoSection = document.querySelector(".pair-two");
    const pairThreeSection = document.querySelector(".pair-three");

    pairOneSection.addEventListener("click", function () {
        showSelectedTable("pair-one-table");
    });

    pairTwoSection.addEventListener("click", function () {
        showSelectedTable("pair-two-table");
    });

    pairThreeSection.addEventListener("click", function () {
        showSelectedTable("pair-three-table");
    });
});