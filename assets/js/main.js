const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toasts = {
  success: {
    icon: '<i class="fa-solid fa-check"></i>',
    message: "This is success message",
  },
  warning: {
    icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
    message: "This is warning message",
  },
  error: {
    icon: '<i class="fa-solid fa-bug"></i>',
    message: "This is warning message",
  },
};

$(".control").addEventListener("click", createToast);

function createToast(e) {
  const btnTarget = e.target.closest("button");

  if (btnTarget) {
    const status = btnTarget.className;
    const toast = document.createElement("div");
    toast.classList.add(status, "toast");

    toast.innerHTML = `
      ${toasts[status].icon}
      <span class="msg">${toasts[status].message}</span>
      <span class="countdown"></span>
    `;

    $("#toasts").appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "hide_slide 1s ease 0s forwards";
      toast.remove();
    }, 4000);
  }
}
