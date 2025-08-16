type Direction = "left" | "right" | "up" | "down";

interface MarqueeOptions {
    stopOnHover?: boolean;
    allowPointEvent?: boolean;
    dir?: Direction;
}

const DIR_MAP: Record<Direction, { sym: string; axis: "X" | "Y" }> = {
    right: { sym: "+", axis: "X" },
    left: { sym: "-", axis: "X" },
    up: { sym: "-", axis: "Y" },
    down: { sym: "+", axis: "Y" },
};

const initMarqueeeSlider = (elementId: string, options: MarqueeOptions = {}): void => {
    // 🚨 Prevent SSR errors
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const container = document.getElementById(elementId);
    if (!container) return;

    const wrapper = container.querySelector<HTMLElement>(".marquee-slider-wrapper");
    const slidesWrapper = wrapper?.querySelector<HTMLElement>(".marquee-slider-slides-wrapper");
    if (!wrapper || !slidesWrapper) return;

    const { stopOnHover = false, allowPointEvent = true, dir = "left" } = options;
    if (!allowPointEvent) container.style.pointerEvents = "none";

    const speed = parseFloat(container.dataset.speed || "10");
    const space = parseFloat(container.dataset.space || "10");
    const prefix = container.dataset.prefix || "px";

    // Layout styles
    Object.assign(slidesWrapper.style, {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: `${space}${prefix}`,
        whiteSpace: "nowrap",
    });

    const dirData = DIR_MAP[dir];

    // Prevent triple duplication on re-init
    if (!slidesWrapper.dataset.marqueeInitialized) {
        slidesWrapper.innerHTML += slidesWrapper.innerHTML + slidesWrapper.innerHTML;
        slidesWrapper.dataset.marqueeInitialized = "true";
    }

    // Measure original width (before duplication)
    const originalWidth = slidesWrapper.scrollWidth / 3;

    // Unique animation name per element
    const animationName = `${elementId}-marquee`;

    // Inject style only once
    if (!document.getElementById(animationName)) {
        const styleTag = document.createElement("style");
        styleTag.id = animationName;
        styleTag.textContent = `
      @keyframes ${animationName} {
        0% { transform: translate${dirData.axis}(0); }
        100% { transform: translate${dirData.axis}(${dirData.sym}${originalWidth}px); }
      }
    `;
        document.head.appendChild(styleTag);
    }

    // Apply animation
    slidesWrapper.style.animation = `${animationName} ${speed}s linear infinite`;

    // Hover control
    if (stopOnHover && !slidesWrapper.dataset.hoverBound) {
        slidesWrapper.addEventListener("mouseenter", () => {
            slidesWrapper.style.animationPlayState = "paused";
        });
        slidesWrapper.addEventListener("mouseleave", () => {
            slidesWrapper.style.animationPlayState = "running";
        });
        slidesWrapper.dataset.hoverBound = "true";
    }
};

// ✅ Safe for SSR: attach only in browser
if (typeof window !== "undefined") {
    (window as any).initMarqueeeSlider = initMarqueeeSlider;
}

export { initMarqueeeSlider };
