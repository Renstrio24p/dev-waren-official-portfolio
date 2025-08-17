import { Stars, TestimonialCards } from "../../components";

const useTestimonialCards = () => {

    const testimonialCards = TestimonialCards();
    const stars = Stars()

    return { testimonialCards, stars };
};

export { useTestimonialCards };