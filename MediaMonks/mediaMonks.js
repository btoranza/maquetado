const loadingScreen = document.getElementById("loadingScreen");
setTimeout(() => {
    loadingScreen.classList.add("fadeScreen");
    loadingScreen.style.zIndex = "0";
}, 2500); // This setTimeout is for the loading screen to spent some time on the screen, like the video. In reality it would be done with document.ready.
let pageNumber = 0;
const pages = document.querySelectorAll(".paginator-cell");
const pageSelector = document.querySelectorAll(".paginator-selector");
const prevPageButton = document.getElementById("pageButton-prev");
const nextPageButton = document.getElementById("pageButton-next");
pages.forEach((page) => {
    page.addEventListener("click", () => {
        const selectedPage = parseInt(page.getAttribute("pageNumber")); // Parsing the attribute from string to match the variable type.
        pageNumber = selectedPage;
        setPage(pageNumber);
    });
});
const prevPage = () => {
    if (pageNumber !== 0) {
        pageNumber--;
        setPage(pageNumber);
    }
};
const nextPage = () => {
    if (pageNumber !== 9) {
        pageNumber++;
        setPage(pageNumber);
    }
};
prevPageButton.addEventListener("click", () => {
    prevPage();
});
nextPageButton.addEventListener("click", () => {
    nextPage();
});
const backgroundImage = document.getElementById("backgroundImage");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const setPage = (page) => {
    handlePagination(page);
    const data = pageData.find((p) => page === p.id);
    renderPageData(data);
};
const handlePagination = (page) => {
    page === 0 ? prevPageButton.style.visibility = 'hidden' : prevPageButton.style.visibility = 'visible';
    page === 9 ? nextPageButton.style.visibility = 'hidden' : nextPageButton.style.visibility = 'visible';
    pageSelector.forEach((p) => p.classList.remove("paginator-selector-active"));
    pageSelector[page].classList.add("paginator-selector-active");
};
const renderPageData = (data) => {
    backgroundImage.style.backgroundPositionX = `${data.backgroundPosition}%`;
    title.innerHTML = data.title;
    title.classList.remove(getLastClass(title));
    title.classList.add(`mainScreen-title-${data.titleClass}`);
    const subtitleText = data.subtitle != null ? data.subtitle : stepsSubtitle(data.id);
    const subtitleClass = data.subtitleClass != null ? data.subtitleClass : stepsSubtitlePosition;
    subtitle.innerHTML = subtitleText;
    subtitle.classList.remove(getLastClass(subtitle));
    subtitle.classList.add(`mainScreen-subtitle-${subtitleClass}`);
};
const getLastClass = (element) => {
    let lastClasses = element.classList.value.split(" ");
    let lastClass = lastClasses.length > 1 ? lastClasses.pop() : null;
    return lastClass;
};
const stepsSubtitle = (page) => `Step ${page} out of 8 on the path to digital enlighment`;
const stepsSubtitlePosition = "bottomRight";
const pageData = [
    {
        id: 0,
        backgroundPosition: "0",
        title: "We are breaking<br>our bow<br>of silence",
        titleClass: "topLeft",
        subtitle: "In January 2011, after a decade of digital, we opened the doors to our temple.<br>Follow our noble eightfold path to digital enlightment here.",
        subtitleClass: "bottomLeft",
    },
    {
        id: 1,
        backgroundPosition: "12",
        title: "Talent is given<br>true skill is<br>earned",
        titleClass: "middleLeft",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 2,
        backgroundPosition: "24",
        title: "Be flexible to<br>change and<br>sturdy in conviction",
        titleClass: "middleLeft",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 3,
        backgroundPosition: "36",
        title: "Use many skills<br>yet work as one",
        titleClass: "middleRight",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 4,
        backgroundPosition: "48",
        title: "To master<br>anything find<br>interest in<br>everything",
        titleClass: "middleRight",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 5,
        backgroundPosition: "60",
        title: "Individuals<br>flourish<br>if culture<br>and wisdom<br>are shared",
        titleClass: "middleRight",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 6,
        backgroundPosition: "72",
        title: "Train for<br>perfection but<br>aim for more",
        titleClass: "middleLeft",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 7,
        backgroundPosition: "84",
        title: "Take pride in your<br>work but do not<br>seek praise",
        titleClass: "middleLeft",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 8,
        backgroundPosition: "96",
        title: "Temporary<br>sacrifice brings<br>lasting results",
        titleClass: "middleLeft",
        subtitle: null,
        subtitleClass: null,
    },
    {
        id: 9,
        backgroundPosition: "108",
        title: "Become a monk",
        titleClass: "topRight",
        subtitle: "Interested in joining our monastery?<br> Check out our current openings on <a>mediamonks.com/careers</a><br><br><span class='mainScreen-social'><i class='lni lni-envelope'></i>Mail ons <i class='lni lni-facebook-filled'></i> Facebook <i class='lni lni-twitter-filled'></i> Twitter</span>",
        subtitleClass: "middleRight",
    },
];
setPage(0);
//# sourceMappingURL=mediaMonks.js.map