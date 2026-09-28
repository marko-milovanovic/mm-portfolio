const projects = [
  {
    title: "Clockify",
    category: "Productivity",
    description: "Track work hours, projects, and billable time in one place. Clockify is a time tracking and timesheet app used by individuals, teams, and businesses to track work, manage projects, and understand how time is spent. Start the timer, fill out timesheets, and generate reports with a free plan.",
    tags: ["SwiftUI", "Offline First", "Swift Concurrency", "Swift 6", "Push Notifications", "WebSockets", "Core Data", "Firebase"],
    logo: "images/clockify_logo.webp",
    images: ["images/clockify_1.webp", "images/clockify_2.webp", "images/clockify_3.webp"],
    link: "https://apps.apple.com/app/clockify-time-tracker/id1304431926"
  },
  {
    title: "Clockify Desktop",
    category: "Productivity",
    description: "Track work hours, projects, and billable time in one place. Clockify is a time tracking app used by individuals, teams, and businesses to track work, manage projects, and understand how time is spent.",
    tags: ["SwiftUI", "Offline First", "Swift Concurrency", "Swift 6", "Push Notifications", "WebSockets", "Core Data", "Firebase"],
    logo: "images/clockify_desktop_logo.webp",
    images: ["images/clockify_desktop_1.webp"],
    link: "https://apps.apple.com/app/clockify-desktop/id1364502317?mt=12"
  },
  {
    title: "N26 — Love your bank",
    category: "Finance",
    description: "A modern digital banking app focused on making everyday banking simple and accessible. N26 provides users with a streamlined experience for managing accounts, cards, payments, transfers, and personal finances from a single mobile application.",
    tags: ["SwiftUI", "Combine", "GraphQL", "Kotlin Multiplatform", "Kotilin", "Compose"],
    logo: "images/n26_logo.webp",
    images: ["images/n26_1.webp", "images/n26_2.webp", "images/n26_3.webp"],
    link: "https://apps.apple.com/app/n26-love-your-bank/id956857223"
  },
  {
    title: "The Beam: Music Charts",
    category: "Music",
    description: "The music competition where artists get paid and fans decide who wins. Every season, emerging artists across 6 genres compete for $10,000 in prizes. They submit tracks. Fans vote. Charts move in real time. The artists with the most fan support rise — and earn real money.",
    tags: ["SwiftUI", "Swift Concurrency", "GraphQL"],
    logo: "images/the_beam_logo.webp",
    images: ["images/the_beam_1.webp", "images/the_beam_2.webp", "images/the_beam_3.webp"],
    link: "https://apps.apple.com/app/the-beam-music-charts/id6752348300"
  },
  {
    title: "FCN App",
    category: "Sport",
    description: "The official FCN app keeps fans connected with the club through the latest news, videos, interviews, quizzes, and polls. FCN Premium provides an enhanced experience with live coverage of training matches and exclusive behind-the-scenes content, giving fans a closer look at the club.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/fcn_logo.webp",
    images: ["images/fcn_1.webp", "images/fcn_2.webp", "images/fcn_3.webp"],
    link: "https://apps.apple.com/app/fcn-app/id1479981465"
  },
  {
    title: "FC Midtjylland",
    category: "Sport",
    description: "The official FC Midtjylland app brings the club experience together in one place. Fans can follow the latest news and video content, keep up with live matches and statistics, manage tickets and season cards, and track FCM Shop orders. Fully integrated with FCM ID, the app provides a seamless single-login experience across the club's digital services.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/fcm_logo.webp",
    images: ["images/fcm_1.webp", "images/fcm_2.webp", "images/fcm_3.webp"],
    link: "https://apps.apple.com/app/fc-midtjylland/id6480509193"
  },
  {
    title: "OB",
    category: "Sport",
    description: "The official OB fan app creates a closer connection between the club and its supporters. Fans can stay up to date with the latest news, access exclusive content, follow live match updates and statistics, participate in polls and quizzes, and easily manage their tickets and membership cards — all in one place.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/ob_logo.webp",
    images: ["images/ob_1.webp", "images/ob_2.webp", "images/ob_3.webp"],
    link: "https://apps.apple.com/app/ob/id1571271391"
  },
  {
    title: "Bruleurs de Loups",
    category: "Sport",
    description: "The official Brûleurs de Loups app brings the full fan experience together in one place. Fans can follow the latest news, results, schedules, live scores, and game commentary, while accessing exclusive videos and social media content. The app also offers quizzes, polls, predictions, raffles, and MVP voting, allowing fans to earn points, unlock exclusive rewards, and climb the Top Fan rankings. Integrated shop and ticketing features complete the experience.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/bdl_logo.webp",
    images: ["images/bdl_1.webp", "images/bdl_2.webp", "images/bdl_3.webp"],
    link: "https://apps.apple.com/app/bruleurs-de-loups/id1089109681"
  },
  {
    title: "Royal Charleroi Sporting Club",
    category: "Sport",
    description: "The official club fan app delivers a complete digital matchday experience, with exclusive news and videos, live scores, match commentary, live tweets, and fixtures. Fans can interact through live chats, share photos, browse merchandise, and purchase tickets directly from the app. A built-in fan engagement system rewards users for attending matches and participating in quizzes, polls, predictions, and MVP voting, with points redeemable for exclusive rewards and experiences.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/rcsc_logo.webp",
    images: ["images/rcsc_1.webp", "images/rcsc_2.webp", "images/rcsc_3.webp"],
    link: "https://apps.apple.com/app/royal-charleroi-sporting-club/id1583564033"
  },
  {
    title: "Holstein Kiel App",
    category: "Sport",
    description: "The official Holstein Kiel fan app keeps supporters connected to the club with the latest news, live scores, match commentary, fixtures, tables, statistics, and team information. Fans can follow games live, access tickets and merchandise, watch HolsteinTV content, read the digital stadium magazine, participate in polls, and stay up to date with training sessions, events, and all Holstein Kiel teams.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/ksv_logo.webp",
    images: ["images/ksv_1.webp", "images/ksv_2.webp", "images/ksv_3.webp"],
    link: "https://apps.apple.com/app/royal-charleroi-sporting-club/id1583564033"
  },
  {
    title: "Esbjerg fB",
    category: "Sport",
    description: "The official EfB fan app keeps supporters up to date with the latest news from the club and its partners, while offering exclusive video content including goals, highlights, interviews, and player features. Fans can access their season ticket and match tickets directly through their Wallet, follow the full match schedule and venues, and take part in exclusive competitions and fan activities such as voting for Player of the Match.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"],
    logo: "images/efb_logo.webp",
    images: ["images/efb_1.webp", "images/efb_2.webp", "images/efb_3.webp"],
    link: "https://apps.apple.com/app/royal-charleroi-sporting-club/id1583564033"
  },
  {
    title: "the5 Closet",
    category: "Lifestyle",
    description: "A mobile app designed to help you keep your closet organized. Capture and track your outfits with What I Wore and build your closet seamlessly using selfies. Create your style using Rails to plan your outfits, create packing lists for travel and share with friends!",
    tags: ["SwiftUI", "Combine", "AVFoundation", "Modularization", "Firebase"],
    logo: "images/the5_logo.webp",
    images: ["images/the5_1.webp", "images/the5_2.webp", "images/the5_3.webp"],
    link: "https://apps.apple.com/app/the5-closet/id1670245735"
  },
  {
    title: "Tophåndbold",
    category: "Sport",
    description: "The Tophåndbold app brings Danish top-level handball together in one digital experience. Fans can follow their favorite clubs and players, stay up to date with news, results, standings, statistics, and video content, and personalize their feed to receive the updates they care about most. The app also offers loyalty points, quizzes, and competitions, creating an engaging experience for handball fans beyond the matches.",
    tags: ["SwiftUI", "Swift Concurrency", "Swift 6", "Push Notifications", "WebKit", "Firebase"],
    logo: "images/top_logo.webp",
    images: ["images/top_1.webp", "images/top_2.webp", "images/top_3.webp"],
    link: "https://apps.apple.com/app/toph%C3%A5ndbold/id1582157256"
  },
  {
    title: "Topphåndball",
    category: "Sport",
    description: "The Norsk Topphåndball app brings Norwegian top-level handball together in one digital ecosystem. Fans can follow their favorite clubs and players, stay up to date with news, results, standings, statistics, and articles, and personalize their feed to receive the content they care about most. The app also integrates tickets and season cards, giving fans convenient access to everything in one place.",
    tags: ["SwiftUI", "Swift Concurrency", "Swift 6", "Push Notifications", "WebKit", "Firebase"],
    logo: "images/nth_logo.webp",
    images: ["images/nth_1.webp", "images/nth_2.webp", "images/nth_3.webp"],
    link: "https://apps.apple.com/app/topph%C3%A5ndball/id6746633221"
  },
  {
    title: "Hockeyettan",
    category: "Sport",
    description: "The Hockeyettan app brings Swedish ice hockey together in one digital ecosystem, connecting clubs from Hockeyettan Norra and Södra on a shared platform. Fans can follow their favorite teams and players, stay up to date with news, matches, results, standings, and statistics, and personalize their content feed. The app also provides convenient access to tickets and season cards, keeping everything fans need in one place.",
    tags: ["SwiftUI", "Swift Concurrency", "Swift 6", "Push Notifications", "WebKit", "Firebase"],
    logo: "images/he_logo.webp",
    images: ["images/he_1.webp", "images/he_2.webp", "images/he_3.webp"],
    link: "https://apps.apple.com/app/hockeyettan/id6755757606"
  },
  {
    title: "NLF",
    category: "Sport",
    description: "The Norsk Ligafotball app brings Norwegian league football together in one digital ecosystem, connecting clubs from the PostNord-ligaen and Norsk Tipping-ligaen on a shared platform. Fans can follow their favorite clubs and players, stay up to date with news, results, standings, statistics, and match content, and personalize their feed with the updates they care about most. The app also integrates tickets and season cards, keeping everything fans need in one place.",
    tags: ["SwiftUI", "Swift Concurrency", "Swift 6", "Push Notifications", "WebKit", "Firebase"],
    logo: "images/nlf_logo.webp",
    images: ["images/nlf_1.webp", "images/nlf_2.webp", "images/nlf_3.webp"],
    link: "https://apps.apple.com/app/nlf/id6477529556"
  },
  {
    title: "CeramicSpeed Bike App",
    category: "Sport",
    description: "The CeramicSpeed Bike App helps cyclists manage, maintain, and optimize their bikes in one place. Users can register bikes and components, sync their rides with Strava, and track component usage with intelligent maintenance recommendations based on riding duration and conditions. The app also includes a toolbox with features such as handlebar alignment, live chat, product warranty registration, and other tools for keeping bikes properly set up and maintained.",
    tags: ["SwiftUI", "Core Bluetooth", "Push Notifications"],
    logo: "images/ceramic_speed_logo.webp",
    images: ["images/ceramic_speed_1.webp", "images/ceramic_speed_2.webp", "images/ceramic_speed_3.webp"],
    link: "https://apps.apple.com/app/ceramicspeed-bike-app/id1635549762"
  },
];

const moreProjects = [
  {
    title: "MetricUI",
    category: "SocialNetworking",
    description: "An iOS application for managing social media marketing activities from a single place. It allows users to create, manage, and monitor their marketing content and campaigns across social platforms.",
    tags: ["SwiftUI", "GraphQL", "Push Notifications"]
  },
  {
    title: "TimeTracker",
    category: "Productivity",
    description: "An internal time-tracking application for iOS and macOS, built as a shared project for company employees. Users could track activities, request daily reviews, view daily/weekly/monthly hours, configure reminders, and monitor overtime or undertime, while reviewers could approve activities and leave notes.",
    tags: ["SwiftUI", "MSAL", "Core Data"]
  },
  {
    title: "CoPilot",
    category: "Sport, Fitness",
    description: "An iOS app developed for Biomega, combining bike management with ride tracking similar to Strava. Users could select and manage their Biomega bikes while recording and reviewing their rides and cycling activity.",
    tags: ["SwiftUI", "Core Location"]
  },
  {
    title: "LimeLight",
    category: "Sport",
    description: "An iOS application developed for LimeLight Sports to support participants during sporting events. It provided event information, updates, and key features to enhance the overall participant experience.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"]
  },
  {
    title: "Mahindra",
    category: "Sport",
    description: "An iOS application developed for Mahindra Racing’s Formula E team. It provided fans with race information, team updates, and an engaging way to follow the team throughout the Formula E season.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"]
  },
  {
    title: "Silkeborg-Voel",
    category: "Sport",
    description: "An iOS application developed for Silkeborg-Voel KFUM, a Danish women’s handball club. It provided fans with match information, team updates, results, and other club-related content.",
    tags: ["UIKit", "Chat", "Push Notifications", "Core Location", "WebKit", "Firebase"]
  },
  {
    title: "Activity budget",
    category: "Finance",
    description: "A React application for managing and planning company activity budgets. It featured two interconnected budgeting sheets with automated calculations, followed by a results and forecasting page to support financial planning and decision-making.",
    tags: ["React", "Redux"]
  },
  {
    title: "Caseware",
    category: "Finance, Productivity",
    description: "A highly configurable React application for managing complex multi-stage workflows across multiple boards. It featured custom virtualized lists optimized for 150,000+ paginated rows, with instant search and efficient item movement between workflow stages.",
    tags: ["React", "Redux"]
  },
  {
    title: "Nova NextGen",
    category: "Productivity",
    description: "A React-based enterprise web application built with Golden Layout to bring an existing Windows application to the web. I worked on the initial MVP, building a modular interface where users could configure their workspace while keeping all modules synchronized through a shared data source.",
    tags: ["React", "Redux", "Golden Layout"]
  },
  {
    title: "Lotery Template",
    category: "Entertainment",
    description: "A reusable React template for quickly launching lottery, raffle, and similar event applications. It was designed as a plug-and-play solution where branding could be configured with minimal changes.",
    tags: ["React", "MobX"]
  }
]

projects.forEach((app, index) => {
  const card = document.createElement("button");

  card.className = "app-card reveal";
  card.dataset.app = index;

  card.innerHTML = `
    <img class="app-image" src="${app.logo}" alt="${app.title}">

    <div class="app-card-copy">
      <div>
        <h3>${app.title}</h3>
        <p>${app.category}</p>
      </div>
    </div>
  `;

  document.querySelector(".apps-grid").appendChild(card);
});

const modal = document.querySelector("#appModal");
const modalMedia = document.querySelector("#modalMedia");
const modalFirstImage = document.querySelector("#modalFirstImage");
const modalSecondImage = document.querySelector("#modalSecondImage");
const modalThirdImage = document.querySelector("#modalThirdImage");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalFeatures = document.querySelector("#modalFeatures");
const modalTags = document.querySelector("#modalTags");
const modalStore = document.querySelector("#modalStore");

function openModal(index) {
  const project = projects[index];
  modalMedia.style.gridTemplateColumns = `repeat(${project.images.length}, 1fr)`;
  modalFirstImage.src = project.images[0] || "";
  modalFirstImage.style.display = project.images[0] ? "" : "none";
  modalSecondImage.src = project.images[1] || "";
  modalSecondImage.style.display = project.images[1] ? "" : "none";
  modalThirdImage.src = project.images[2] || "";
  modalThirdImage.style.display = project.images[2] ? "" : "none";
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = project.tags.map(item => `<span class="tag">${item}</span>`).join("");
  modalStore.href = project.link;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".app-card").forEach(card => {
  card.addEventListener("click", () => openModal(Number(card.dataset.app)));
});

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

const portfolioModal = document.querySelector("#portfolioModal");
const portfolioTableBody = document.querySelector("#portfolioBody");
const openPortfolioBtn = document.querySelector("#openPortfolioBtn");

function renderPortfolioTable() {
  portfolioTableBody.innerHTML = [...projects, ...moreProjects].map(project => `
    <div class="portfolio-row">
      <div>
        <div class="project-cell-title">${project.title}</div>
        <span class="project-cell-category">${project.category}</span>
      </div>
      <div>
        <p class="project-description">${project.description}</p>
        ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View App ↗</a>` : ''}
      </div>
    </div>
  `).join('');
}

function openPortfolioModal(e) {
  if (e) e.preventDefault();
  renderPortfolioTable();
  portfolioModal.classList.add("is-open");
  portfolioModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePortfolioModal() {
  portfolioModal.classList.remove("is-open");
  portfolioModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (openPortfolioBtn) {
  openPortfolioBtn.addEventListener("click", openPortfolioModal);
}

document.querySelectorAll("[data-close-portfolio]").forEach(el => {
  el.addEventListener("click", closePortfolioModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && portfolioModal.classList.contains("is-open")) {
    closePortfolioModal();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const tabs = document.querySelectorAll(".segment");
const panels = document.querySelectorAll(".tab-panel");
const tabPanels = document.querySelector(".tab-panels");
function setTab(name) {
  tabs.forEach(tab => { const active = tab.dataset.tab === name; tab.classList.toggle("active", active); tab.setAttribute("aria-selected", String(active)); });
  panels.forEach(panel => { panel.hidden = panel.id !== `tab-${name}`; });
}
function sizeTabPanels() {
  if (!tabPanels || !panels.length) return;
  const current = [...panels].find(panel => !panel.hidden);
  panels.forEach(panel => panel.hidden = false);
  const maxHeight = Math.max(...[...panels].map(panel => panel.getBoundingClientRect().height));
  panels.forEach(panel => panel.hidden = panel !== current);
  tabPanels.style.minHeight = `${Math.ceil(maxHeight)}px`;
}
tabs.forEach(tab => tab.addEventListener("click", () => { setTab(tab.dataset.tab); sizeTabPanels(); }));
window.addEventListener("resize", sizeTabPanels);
window.addEventListener("load", sizeTabPanels);
document.querySelectorAll("[data-open-tab]").forEach(link => link.addEventListener("click", () => { setTab(link.dataset.openTab); requestAnimationFrame(sizeTabPanels); }));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Make anchor navigation work even when the browser's native smooth scrolling
// is unavailable or disabled.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", id);
  });
});
