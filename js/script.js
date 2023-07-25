//Primary Navigation
const primaryNavigation = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".nav-toggle")

navToggle.addEventListener("click", () => {
  const visibilty = primaryNavigation.getAttribute("data-visible")
  if (visibilty === "false") {
    primaryNavigation.setAttribute("data-visible", "true")
    navToggle.setAttribute("aria-expanded", "true")
  } else if (visibilty === "true") {
    primaryNavigation.setAttribute("data-visible", "false")
    navToggle.setAttribute("aria-expanded", "false")
  }
})

// Accordion
const accordion = document.querySelector(".primary-accordion")

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".primary-accordion-panel")
  if (!activePanel) return
  toggleAccordion(activePanel)
})

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button")
  const activePanel = panelToActivate.querySelector(".primary-accordion-content")
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded")
  const accToggleBtn = document.querySelector(".accordion-togglebtn")

  if (activePanelIsOpened === "true") {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", false)
    panelToActivate.querySelector(".primary-accordion-content").setAttribute("aria-hidden", true)
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true)
    panelToActivate.querySelector(".primary-accordion-content").setAttribute("aria-hidden", false)
  }
}

// Sticky Header
const primaryHeader = document.querySelector(".primary-header")
const scrollWatcher = document.createElement("div")

scrollWatcher.setAttribute("data-scroll-watcher", "")
primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher)
