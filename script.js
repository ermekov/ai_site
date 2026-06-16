const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("[data-nav-menu]");
const revealItems = document.querySelectorAll("[data-reveal]");
const demoChat = document.querySelector("[data-demo-chat]");
const replayButton = document.querySelector("[data-replay-demo]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");
const liveClock = document.querySelector("[data-live-clock]");

const demoMessages = [
  {
    role: "customer",
    label: "Customer",
    text: "Hi. How much is an implant consultation and do you work after 18:00?"
  },
  {
    role: "ai",
    label: "AI assistant",
    text: "A first consultation starts from 15,000 KZT. Yes, the clinic has evening slots. Are you asking for yourself or a family member?"
  },
  {
    role: "customer",
    label: "Customer",
    text: "For myself. I am in Almaty and want to understand payment options."
  },
  {
    role: "ai",
    label: "AI assistant",
    text: "Understood. Installment options are available after the doctor's plan. What is your name and the best phone number for the manager?"
  },
  {
    role: "customer",
    label: "Customer",
    text: "Aigerim. +7 777 123 45 67. Please call me after 18:00."
  },
  {
    role: "ai",
    label: "AI assistant",
    text: "Thank you, Aigerim. I sent the manager your request, city, interest, payment question, phone number, and preferred call time."
  }
];

function setMenu(open) {
  body.classList.toggle("nav-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

menuToggle?.addEventListener("click", () => {
  setMenu(!body.classList.contains("nav-open"));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setMenu(false);
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

let demoTimers = [];

function clearDemoTimers() {
  demoTimers.forEach((timer) => window.clearTimeout(timer));
  demoTimers = [];
}

function addDemoMessage(message) {
  const bubble = document.createElement("article");
  bubble.className = `demo-message ${message.role}`;
  bubble.innerHTML = `<strong>${message.label}</strong><p>${message.text}</p>`;
  demoChat?.appendChild(bubble);
}

function playDemo() {
  if (!demoChat) return;

  clearDemoTimers();
  demoChat.innerHTML = "";

  demoMessages.forEach((message, index) => {
    const timer = window.setTimeout(() => addDemoMessage(message), index * 520);
    demoTimers.push(timer);
  });
}

replayButton?.addEventListener("click", playDemo);

if (demoChat) {
  playDemo();
}

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = leadForm.querySelector("button[type='submit']");
  submitButton?.setAttribute("disabled", "true");
  if (formStatus) {
    formStatus.textContent = "Preparing your audit request...";
  }

  window.setTimeout(() => {
    if (formStatus) {
      formStatus.textContent = "Consultation request captured. Connect this form to your CRM or Telegram workflow when ready.";
    }
    submitButton?.removeAttribute("disabled");
    leadForm.reset();
  }, 700);
});

function updateClock() {
  if (!liveClock) return;
  const now = new Date();
  liveClock.textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateClock();
window.setInterval(updateClock, 30000);
