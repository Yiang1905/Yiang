/* Yiang site interactions — bilingual, accessible, dependency-free */
(function () {
  "use strict";

  const copy = {
    en: {
      skip:"Skip to content",navStudio:"Studio",navWork:"Our work",navApproach:"Approach",navContact:"Contact",navCta:"Start a conversation",
      heroEyebrow:"INDEPENDENT CREATIVE INTELLIGENCE STUDIO",heroLine1:"Creativity",heroLine2:"to improve",heroLine3:"human life.",
      heroLede:"We connect imagination, artificial intelligence and practical product thinking — shaping early ideas into experiences and opportunities that matter.",
      heroExplore:"Explore what we're building",heroAbout:"Meet the studio",heroFoot:"IDEAS · INTELLIGENCE · REAL-WORLD VALUE",
      visualIdeas:"IDEAS",visualSystems:"SYSTEMS",visualImpact:"IMPACT",visualCaption:"FROM POSSIBILITY TO PURPOSE",scrollLabel:"SCROLL TO EXPLORE",
      studioKicker:"THE STUDIO",studioTitle:"A small studio.<br>A wide horizon.",studioLead:"Yiang is an independent creative intelligence studio exploring how thoughtful ideas and emerging technology can make everyday life better.",
      studioBody:"We work across AI applications, digital experiences, product concepts and commercial storytelling. Rather than chasing technology for its own sake, we look for human problems worth solving — then shape clear, testable ways forward.",
      studioLink:"How we think and work",principle1Title:"Start with people.",principle1Body:"Useful innovation begins with real needs, not impressive-sounding technology.",
      principle2Title:"Connect the pieces.",principle2Body:"We bring product, technology, experience and business into one coherent picture.",
      principle3Title:"Move with evidence.",principle3Body:"Clear assumptions, honest status and small practical steps beat empty promises.",
      workKicker:"SELECTED WORK & EXPLORATIONS",workTitle:"Ideas in motion.",workIntro:"A portfolio of independent projects at different stages — from active service work to early product concepts. Each is presented with its current status, not an imagined finish line.",
      statusConcept:"CONCEPT STAGE",statusLive:"LIVE SITE",statusRAndD:"IN DEVELOPMENT",statusActive:"ACTIVE SERVICE",
      neuroSummary:"An intelligent sleep-system concept exploring how AI, sensing and adaptive physical support could work together to create more responsive sleep experiences.",
      neuroDetail:"The project is in concept and strategic-development stage. It is open to discussions with experienced hardware, manufacturing and AI partners around feasibility, joint development, licensing or a broader project transfer. No commercial hardware prototype or clinical validation is being claimed.",
      viewProject:"Explore project",healthSummary:"A China-focused wellness and cultural journey platform for domestic users, bringing together city discovery, local experiences and practical planning.",
      healthDetail:"An information and experience-planning product — not a medical diagnosis service and not a substitute for professional care.",visitSite:"Visit the site",
      officeSummary:"A cross-platform office assistant concept designed to turn natural-language instructions into useful Word documents, spreadsheets and presentations.",
      officeDetail:"Currently in product research and MVP planning. The goal is to make everyday office work easier for people who do not want to wrestle with complex software.",
      discussProject:"Discuss this project",labSummary:"A practical delivery line for presentations, resume refinement and business-plan materials — combining AI-assisted workflows with human review and polishing.",
      labDetail:"Focused on clear structure, readable design and useful deliverables. Scope and turnaround are agreed before work begins.",askAboutServices:"Ask about services",
      portfolioNote:"Project stages are described as they are today. Concepts, research and internal tools are not presented as launched products or validated technologies.",
      capKicker:"WHAT WE BRING TO THE TABLE",capTitle:"From first thought<br>to next step.",capIntro:"Different projects need different kinds of progress. These are the ways Yiang can contribute and collaborate.",
      cap1Title:"AI & product concept development",cap1Body:"Opportunity framing, user scenarios, feature definition and early product direction.",
      cap2Title:"Business storytelling & materials",cap2Body:"Clear presentations, structured proposals and communication materials for real decisions.",
      cap3Title:"Digital experiences & AI workflows",cap3Body:"Lightweight websites, useful automation ideas and practical cross-platform workflows.",
      cap4Title:"Strategic collaboration",cap4Body:"Connecting promising concepts with technical, manufacturing and commercial partners.",
      approachKicker:"A PRACTICAL WAY FORWARD",approachTitle:"Clarity before scale.",step1Title:"Understand",step1Body:"Define the real problem, intended user and desired outcome.",
      step2Title:"Shape",step2Body:"Turn the idea into a focused concept, scope and set of assumptions.",step3Title:"Test",step3Body:"Use lightweight prototypes, content or workflow tests to learn quickly.",
      step4Title:"Connect",step4Body:"Identify the right next step — delivery, partnership, licensing or further research.",
      contactKicker:"LET'S CONNECT",contactTitle:"Have a good idea?<br>Let's give it direction.",contactIntro:"We welcome thoughtful conversations with people building useful things — founders, technology teams, manufacturers and potential partners.",
      contactLabel:"START A CONVERSATION",emailButton:"Email Yiang",copyEmail:"Copy email address",contactNote:"For project enquiries, please include a short introduction, the challenge and the kind of collaboration you have in mind.",
      copied:"Email address copied.",copyFailed:"Please select and copy the email address above.",footerLine:"Independent thinking. Useful innovation. Better everyday life.",backTop:"Back to top",rights:"All rights reserved.",footerTag:"CREATIVITY TO IMPROVE HUMAN LIFE."
    },
    zh: {
      skip:"跳转到正文",navStudio:"工作室",navWork:"项目",navApproach:"工作方式",navContact:"联系",navCta:"开启合作交流",
      heroEyebrow:"独立创意智能工作室",heroLine1:"以创造力",heroLine2:"改善",heroLine3:"人类生活。",
      heroLede:"我们连接想象力、人工智能与务实的产品思维，将早期想法塑造成真正有意义的体验与机会。",
      heroExplore:"探索正在构建的项目",heroAbout:"认识 Yiang",heroFoot:"创意 · 智能 · 真实价值",
      visualIdeas:"创意",visualSystems:"系统",visualImpact:"影响",visualCaption:"从可能性走向价值",scrollLabel:"向下探索",
      studioKicker:"关于工作室",studioTitle:"一家小型工作室。<br>一片广阔天地。",studioLead:"Yiang 是一家独立的创意智能工作室，探索如何用有价值的想法与新兴技术，让日常生活变得更好。",
      studioBody:"我们的探索涵盖 AI 应用、数字体验、产品概念与商业表达。我们不为技术而追逐技术，而是从真实的人和需求出发，寻找值得解决的问题，再设计清晰、可验证的前进路径。",
      studioLink:"了解我们的思考与工作方式",principle1Title:"从人的需求出发。",principle1Body:"有用的创新始于真实需求，而不是听起来很炫的技术。",
      principle2Title:"把要素连接起来。",principle2Body:"让产品、技术、体验与商业形成完整而一致的方案。",
      principle3Title:"用事实推动进展。",principle3Body:"明确假设、如实说明阶段，用小而务实的步骤代替空洞承诺。",
      workKicker:"精选项目与探索",workTitle:"让想法持续向前。",workIntro:"这里展示处于不同阶段的独立项目，从正在承接的服务到早期产品概念。我们如实说明每个项目的当前状态，而不是描绘尚未实现的终点。",
      statusConcept:"概念阶段",statusLive:"网站已上线",statusRAndD:"研发规划中",statusActive:"正在提供服务",
      neuroSummary:"一个智能睡眠系统概念，探索如何将 AI、传感技术与自适应物理支撑结合，创造更具响应能力的睡眠体验。",
      neuroDetail:"项目目前处于概念与战略开发阶段，开放与具备经验的硬件、制造及 AI 合作方探讨可行性、联合开发、技术授权或项目整体转让。目前不宣称已有商业化硬件样机，也不宣称完成临床验证。",
      viewProject:"查看项目",healthSummary:"面向国内用户的健康生活与文化体验平台，整合城市探索、本地体验与实用行程规划。",
      healthDetail:"这是信息与体验规划产品，不提供医疗诊断，也不能替代专业医疗服务。",visitSite:"访问网站",
      officeSummary:"一个跨平台办公助手概念，目标是通过自然语言指令创建和修改 Word 文档、Excel 表格与 PPT 演示文稿。",
      officeDetail:"目前处于产品研究与 MVP 规划阶段，希望让不熟悉复杂办公软件的普通用户也能轻松完成日常办公任务。",
      discussProject:"交流这个项目",labSummary:"面向实际交付的服务方向，涵盖 PPT 美化、简历优化与商业计划材料，结合 AI 辅助流程与人工审核打磨。",
      labDetail:"关注结构清晰、设计易读与成果实用。开始前会先确认工作范围与交付周期。",askAboutServices:"咨询服务",
      portfolioNote:"项目阶段均按当前真实进度描述。概念、研究和内部工具不会被包装成已经发布或经过验证的产品。",
      capKicker:"我们可以提供的价值",capTitle:"从最初的想法<br>走向下一步。",capIntro:"不同项目需要不同的推进方式。以下是 Yiang 可以参与和协作的方向。",
      cap1Title:"AI 与产品概念开发",cap1Body:"机会梳理、用户场景、功能定义与早期产品方向设计。",
      cap2Title:"商业表达与材料制作",cap2Body:"清晰的演示文稿、结构化方案与辅助决策的沟通材料。",
      cap3Title:"数字体验与 AI 工作流",cap3Body:"轻量级网站、实用自动化思路与跨平台工作流程。",
      cap4Title:"战略合作",cap4Body:"帮助有潜力的概念连接技术、制造与商业合作伙伴。",
      approachKicker:"务实的推进方式",approachTitle:"先厘清，再放大。",step1Title:"理解",step1Body:"明确真实问题、目标用户与希望实现的结果。",
      step2Title:"构思",step2Body:"把想法整理为聚焦的概念、工作范围与关键假设。",step3Title:"验证",step3Body:"通过轻量原型、内容或流程测试，尽快获得反馈。",
      step4Title:"连接",step4Body:"确定合适的下一步：交付、合作、授权或继续研究。",
      contactKicker:"保持联系",contactTitle:"你有一个好想法？<br>让我们一起找到方向。",contactIntro:"欢迎与正在创造有用产品的人交流，包括创业者、技术团队、制造商及潜在合作伙伴。",
      contactLabel:"开启一次交流",emailButton:"发送邮件",copyEmail:"复制邮箱地址",contactNote:"项目咨询请简单介绍背景、当前问题，以及你希望探讨的合作方式。",
      copied:"邮箱地址已复制。",copyFailed:"请选中上方邮箱地址并手动复制。",footerLine:"独立思考 · 有用的创新 · 更好的日常生活",backTop:"返回顶部",rights:"版权所有。",footerTag:"以创造力改善人类生活。"
    }
  };

  const languageButton = document.getElementById("language-toggle");
  let language = "en";
  try {
    const saved = localStorage.getItem("yiang-language");
    if (saved === "zh" || saved === "en") language = saved;
  } catch (_) {}

  function setLanguage(next) {
    language = next === "zh" ? "zh" : "en";
    const dict = copy[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (!Object.prototype.hasOwnProperty.call(dict, key)) return;
      const value = dict[key];
      if (value.indexOf("<br>") >= 0) {
        node.innerHTML = value;
      } else {
        const textNode = Array.from(node.childNodes).find(function (child) { return child.nodeType === Node.TEXT_NODE && child.nodeValue.trim(); });
        if (textNode) textNode.nodeValue = value;
        else node.textContent = value;
      }
    });
    if (languageButton) {
      languageButton.textContent = language === "en" ? "中文" : "EN";
      languageButton.setAttribute("aria-label", language === "en" ? "切换为中文" : "Switch to English");
    }
    try { localStorage.setItem("yiang-language", language); } catch (_) {}
  }

  if (languageButton) languageButton.addEventListener("click", function () {
    setLanguage(language === "en" ? "zh" : "en");
  });
  setLanguage(language);

  const header = document.querySelector(".site-header");
  function updateHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const opening = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(opening));
      menuButton.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
      nav.classList.toggle("open", opening);
      document.body.classList.toggle("menu-open", opening);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const copyButton = document.getElementById("copy-email");
  const feedback = document.getElementById("copy-feedback");
  if (copyButton) {
    copyButton.addEventListener("click", async function () {
      const address = "xhsj2005@gmail.com";
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(address);
          copied = true;
        } else {
          const helper = document.createElement("textarea");
          helper.value = address;
          helper.setAttribute("readonly", "");
          helper.style.position = "fixed";
          helper.style.opacity = "0";
          document.body.appendChild(helper);
          helper.select();
          copied = document.execCommand("copy");
          helper.remove();
        }
      } catch (_) {}
      if (feedback) feedback.textContent = copied ? copy[language].copied : copy[language].copyFailed;
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".principle,.project,.cap-list article,.approach-steps article").forEach(function (node) {
      node.classList.add("motion-ready");
      observer.observe(node);
    });
  }
})();