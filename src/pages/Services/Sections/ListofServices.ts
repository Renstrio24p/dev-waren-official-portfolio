import ServicesList from '@/lib/components/ServicesList';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function ListofServices(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
        <section class="relative px-6 py-20 text-center">
            <!-- Section Heading -->
            <div class="mb-12 animate__animated animate__fadeInUp delay-200">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">List of Services</h3>
                <p class="text-gray-500 text-lg max-w-2xl mx-auto">
                    I offer a wide range of services to meet your needs.
                </p>
            </div>
        
            <!-- Service Cards -->
            <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
                ${ServicesList()}
            </div>
        </section>
        `
    );

    return ui;
}
