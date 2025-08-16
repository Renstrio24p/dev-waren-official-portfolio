import { inject } from "@vercel/analytics"

const useVercelInsights = () => {

    const analytics = inject();

    return { analytics }
};

export { useVercelInsights };