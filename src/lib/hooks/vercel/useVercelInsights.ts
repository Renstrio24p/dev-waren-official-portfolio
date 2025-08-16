let injected = false;

const useVercelInsights = () => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production" && !injected) {
        import("@vercel/analytics").then(({ inject }) => {
            inject();
            injected = true; // ensure it runs once
        }).catch(err => {
            console.error("Failed to load Vercel Analytics:", err);
        });
    }
};

export { useVercelInsights };
