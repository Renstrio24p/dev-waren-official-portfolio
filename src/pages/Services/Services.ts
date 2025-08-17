import { useServicesSettings } from '@/lib/hooks';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export default function Services(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Services',
        description: 'This is Services Page',
        author: 'Waren Gador'
    });

    const ui = useTSElements(
        DOM,
        html`
        <div>
            <div id="services-hero"></div>
            <div class="max-w-screen-2xl mx-auto">
                <div id="services-list"></div>
            </div>
        </div>
    `
    );

    useServicesSettings(DOM);

    return ui
}